require("dotenv").config();  //old way for calling a file

const mongoose = require('mongoose');
const express = require('express');
const cors=require('cors');
const app = express();
const authRoutes=require("./routes/auth");



//mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });
//DB connections 
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("DB CONNECTED");
}).catch(()=>{
    console.log("DB GOT Oopps!!!");
});

// myfun.run().then().catch()
// In the above line then() is ued to run the run() when the condition is true and catch() is run when the condition is false
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
extended:true
}));


//My routes
app.use("/api",authRoutes);

//Port
const port = process.env.PORT || 8006;


//starting server
app.listen(port, () => {
    console.log(`app is lostening on port ${port}`);
}); 
