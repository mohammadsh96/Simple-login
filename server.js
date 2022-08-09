const express = require("express");

const PORT=process.env.PORT ||3000
const app =express();
app.use(express.json());
const users =[];

app.set("view-engine", "ejs");
app.get("/",  (req, res) => {

res.send("hello world!");



})

app.get("/users", (req, res) => {

res.render('login.ejs', {name : "moahammad" });


});

app.post("/users", (req, res) => {
const user = {name : req.body.name};
 users.push(user);
res.send(user);



});

// app.get("/users/login", (req, res) => {

//     res.render('/login.ejs');
    
    
//     });













app.listen(PORT  , ()=>{
console.log(`mohammadsh on port ${PORT}`);

});