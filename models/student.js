var mongoose=require("mongoose");

var student = new mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    photo:String,
    degree:String
})

var Student= mongoose.model("Student",student);
module.exports=Student;