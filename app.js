var express=require("express");
var app=express();
var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/yelp_camp",{useNewUrlParser: true, useUnifiedTopology: true});
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
var campgroundSchema=new mongoose.Schema({
name:String,
image:String,
description:String
});
var Campground=mongoose.model("Campground",campgroundSchema);
/*Campground.create({
   name:"granite hill",
   image:"https://pixabay.com/get/52e8d4444255ae14f1dc84609620367d1c3ed9e04e5074417c2973d69e44c1_340.jpg",
   description:"this is a huge granite hill no bathroom no water only beautiful granite" 
},function(err,campground){
if(err)
{
   console.log(err);
}
else
{
   console.log("newly created campground");
   console.log(campground);
}
});*/
app.get("/",function(req,res)
{
   res.render("landing"); 
});
 
app.get("/campgrounds",function(req,res)
{
 Campground.find({},function(err,allCampgrounds){
     if(err)
     {
        console.log(err);
     }
     else
     {
       res.render("index",{campgrounds:allCampgrounds}); 
     }
 });
      
});
app.post("/campgrounds",function(req,res)
{
   var name=req.body.name;
   var image=req.body.image;
   var desc=req.body.description;
   var newCampgrounds={name:name , image:image,description:desc};
   Campground.create(newCampgrounds,function(err,newCreated){
      if(err)
      {
         console.log(err);
      }
      else
      {
         res.redirect("/campgrounds");
      }
   });
  
});
app.get("/campgrounds/new",function(req,res){
   res.render("new.ejs"); 
});
app.get("/campgrounds/:id",function(req,res){
Campground.findById(req.params.id,function(err,foundCampground){
if(err)
{
   console.log(err);
}
else
{
   res.render("show",{campground:foundCampground});
}
});
});
app.listen(9000,function(){
   console.log("the yelmp server has started!!"); 
});
