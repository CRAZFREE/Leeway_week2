var express = require("express");
var router = express.Router();
const { signout, signup, details, allusers,deleteuser } = require("../controllers/auth");

router.post("/signup", signup);
router.get("/signout", signout);
router.get("/details/:id", details);
router.get("/", allusers);
router.delete("/deleteuser/:id",deleteuser);

module.exports = router;
