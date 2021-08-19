//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const dbSetup = require("./db/setup");
const _ = require("lodash");
const User = require("./model/model");






const app = express();


app.set('view engine', 'ejs');
dbSetup();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get('/', (req, res) => {
      res.render("home");
      });

      app.get('/accept', (req, res) => {
        res.render("accept");
        });
      
app.post('/submit', (req,res) =>  {
  const userEmail = req.body.email;
  const userName = req.body.fullName;
  console.log(userEmail)
  console.log(userName)

  const sPost = new User({
    email: userEmail,
    fullName: userName
      });
    
  sPost.save(function(err){
    if (!err) {
      res.render("accept");
    }else{
      console.log(err);
      res.render("error");
        }
      });
    });






app.listen(process.env.PORT || 3000, function() {
  console.log("The Server has started on port 3000");
});