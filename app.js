let express= require("express");
let app=express();
var bodyParser=require("body-parser");
var mongoose=require("mongoose");
mongoose.set("useNewUrlParser",true);
mongoose.set("useUnifiedTopology",true);
mongoose.connect("mongodb://localhost/student");
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
let Student= require("./models/student");


app.get("/",function(req,res){
    res.render("landing");
})

app.get("/entry",function(req,res){
    res.render("entry");
});

app.post("/students_list",function(req,res){
    let name=req.body.name;
    let email=req.body.email;
    let phone=req.body.phone;
    let photo=req.body.photo;
    let degree=req.body.degree;
    Student.create({name:name,email:email,phone:phone,photo:photo,degree:degree},function(err,student){
    if(err){
      console.log(err);
      res.redirect("/");
    }else{
      res.redirect("students_list")
    }
    })
})

app.get("/students_list",function(req,res){
  if(req.query.search){
    let regex=new RegExp(Regex(req.query.search));
    Student.find({name:regex},function(err,student){
     if(err){
       console.log(err);
     }else{
       res.render("students_list",{student:student})
     }
    })
  }else{
  Student.find({},function(err,student){
    if(err){
      console.log(err);
      res.redirect("/");
    }else{
      res.render("students_list",{student:student})
    }
  })
}
})

app.get("/student/:id",function(req,res){
   Student.findById(req.params.id,function(err,found){
     if(err){
       console.log(err);
       res.redirect("/")
     }else{
       res.render("student",{student:found});
     }
   })
})

app.get("/student/edit/:id",function(req,res){
   Student.findById(req.params.id,function(err,found){
    if(err){
      console.log(err);
    }else{
      res.render("edit",{student:found});
    }
   })
})

app.post("/student/:id",function(req,res){
  Student.findByIdAndUpdate(req.params.id,req.body,function(err,student){
   if(err){
     console.log(err);
   }else{
     res.redirect("/student/"+student.id)
   }
  })
})

function Regex(text){
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/gi,"\\$&");
}
app.listen(9000,function(){
  console.log("server has started")
})