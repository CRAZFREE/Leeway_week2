//auth.js in controllers

const User = require("../models/user");

//It is recommended to name the same as we have given in model/user
//while exporting it that is  module.exports=mongoose.model("User",userSchema);
//module.exports actually exports only one if we want to export more than we can use this

//req.body holds parameters that are sent up from the client as part of a POST request.
// exports.signup = (req, res) => {
//     console.log("REQ BODY", req.body);
//     res.json({
//         messaage: "user signup"
//     });
// };

exports.signup = (req, res) => {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err || !user) {
      console.log(err);
      return res.status(400).json({
        err: "NOT able to save user in DB",
      });
    }
    console.log(user);
    return res.json({
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      id: user._id,
    });
  });
};

exports.allusers = async (req, res) => {
  try {
    const all = await User.find();
    res.json(all);
  } catch (err) {
    res.json({
      message: "There is no User in the database",
    });
  }
};
exports.details = async (req, res) => {
  try {
    show_id = req.params.id;
    const user_details = await User.findById(show_id);
    return res.json(user_details);
  } catch (err) {
    res.json({
      message: "User not Found",
    });
  }
};

exports.deleteuser = async (req, res) => {
  try {
    delete_id = req.params.id;
    // if (!deleteUser) {
    //   res.json({
    //     message: "User id not found",
    //   });
    // }
    const deleteUser = await User.remove({_id:delete_id});
    return res.json(deleteUser);
  } catch (err) {
    console.log(err);
    return res.json({
      message: "User not found",
    });
  }
};

exports.signout = (req, res) => {
  res.json({
    message: "User signout",
  });
};
