var express=require("express");
var app=express();
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
 var campgrounds=[
       {name:"salmon greek",image:"https://pixabay.com/get/50e9d4474856b10ff3d8992ccf2934771438dbf852547940702f7ed4914d_340.jpg"},
       {name:"granite hill",image:"https://pixabay.com/get/57e8d0424a5bae14f1dc84609620367d1c3ed9e04e5074417c2a7bd1974bc5_340.jpg"},
       {name:"mountain goat's rest",image:"https://pixabay.com/get/52e5d7414355ac14f1dc84609620367d1c3ed9e04e5074417c2a7bd1974bc5_340.jpg"},
       {name:"salmon greek",image:"https://pixabay.com/get/50e9d4474856b10ff3d8992ccf2934771438dbf852547940702f7ed4914d_340.jpg"},
       {name:"granite hill",image:"https://pixabay.com/get/57e8d0424a5bae14f1dc84609620367d1c3ed9e04e5074417c2a7bd1974bc5_340.jpg"},
       {name:"salmon greek",image:"https://pixabay.com/get/50e9d4474856b10ff3d8992ccf2934771438dbf852547940702f7ed4914d_340.jpg"},
       {name:"granite hill",image:"https://pixabay.com/get/57e8d0424a5bae14f1dc84609620367d1c3ed9e04e5074417c2a7bd1974bc5_340.jpg"},
       {name:"mountain goat's rest",image:"https://pixabay.com/get/52e5d7414355ac14f1dc84609620367d1c3ed9e04e5074417c2a7bd1974bc5_340.jpg"}
       ] 
app.get("/",function(req,res)
{
   res.render("landing"); 
});
 
app.get("/campgrounds",function(req,res)
{
 
       res.render("campgrounds",{campgrounds:campgrounds});
});
app.post("/campgrounds",function(req,res)
{
   var name=req.body.name;
   var image=req.body.image;
   var newCampgrounds={name:name , image:image};
   campgrounds.push(newCampgrounds);
   res.redirect("/campgrounds");
});
app.get("/campgrounds/new",function(req,res){
   res.render("new.ejs"); 
});
app.listen(process.env.PORT,process.env.IP,function(){
   console.log("the yelmp server has started!!"); 
});
