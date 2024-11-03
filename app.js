const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
let  items= [];


const homestartcontent= "this is paragraph";
const aboutcontent = "kirinyaga university student"

app.get("/",function (req, res){
 res.render( "home" ,{
    homestartcontent:homestartcontent,
}) ;



});
app.get ("/post",function(req,res){
    res.render( "post" ,{
        
        items:items
    }) ;
});
app.get("/about", function(req,res){
    res.render("about",{aboutcontent:aboutcontent});
});
app.get("/compose",function(req,res){
    res.render("compose");
});
app.post("/compose",function(req,res){
const post ={
    title:req.body.posttitle,
    postbody:req.body.content
};
items.push(post);
res.redirect("/post");

});
app.get("/post/:postName",function(req,res){
    const requestedtile =req.params.postName;
    
    items.forEach(function(item){
     const storedtitle = item.title;
     if (storedtitle===requestedtile){
    //  res.render("post",{
    //     title:item.posttitle,
    //     content:item.postbody
    //  });
     }
    });
});






app.listen(3000,function() {
    console.log("server is running on port 3000....")
});