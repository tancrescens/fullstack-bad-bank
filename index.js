// Server Side index.js (Express)
var express = require("express");
var app = express();
var cors = require("cors");
var dal = require("./dal.js");

// Used to serve static files from public directory
app.use(express.static("public"));
app.use(cors());

// create user account
app.get("/account/create/:name/:email/:password", function (req, res) {
  // check if account exists
  dal
    .find(req.params.email)
    .then((users) => {
      // if user exists, return error message
      if (users.length > 0) {
        console.log("User already exists");
        res.send("User already exits");
      } else {
        // else create user
        dal
          .create(req.params.name, req.params.email, req.params.password, 0.0)
          .then((user) => {
            console.log("User Created: " + user);
            res.send(user);
          });
      }
    })
    .catch((err) => {
      res.send(err);
    });
});

// login user
app.get("/account/login/:email/:password", function (req, res) {
  dal.find(req.params.email).then((user) => {
    // if user exists, check password
    if (user.length > 0) {
      if (user[0].password === req.params.password) {
        res.send(user[0]);
      } else {
        res.send("Login failed: wrong password");
      }
    } else {
      res.send("Login failed: user not found");
    }
  });
});

// update - deposit/withdraw amount
app.get("/account/update/:email/:amount", function (req, res) {
  var amount = Number(req.params.amount);

  dal
    .update(req.params.email, amount)
    .then((response) => {
      console.log(response);
      res.send(response);
    })
    .catch((err) => err);
});

// all accounts
app.get("/account/all", function (req, res) {
  dal.all().then((docs) => {
    console.log(`All users: ${JSON.stringify(docs)}`);
    res.send(docs);
  });
});

// find user account
app.get("/account/find/:email", function (req, res) {
  dal.find(req.params.email).then((user) => {
    console.log(user);
    res.send(user);
  });
});

// find one user by email - alternative to find
app.get("/account/findOne/:email", function (req, res) {
  dal.findOne(req.params.email).then((user) => {
    console.log(user);
    res.send(user);
  });
});

var port = process.env.PORT || 8080;
app.listen(port);
console.log("Running on port: " + port);
