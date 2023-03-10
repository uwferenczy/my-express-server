const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello World!</h1>");
});

app.get("/contact",function(req, res){
    res.send("Contact me at: dominic.ferenczy@gmail.com");
});

app.get("/about",function(req, res){
    res.send("I am an IT afficianato, my name is Dominic");
});

app.get("/hobbies",function(req, res){
    res.send("<ul><li>coffee</li><li>code</li></ul>");
});


app.listen(3000, function(){
    console.log("Server started on port 3000");
});