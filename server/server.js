const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const db = require("./database");

app.use(bodyParser.json());

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hi");
});

app.post("/register", (req, res) => {
  const ADD_QUERY = `insert into loginsys.loginuser (user_name, user_pass) values('${req.body.username}', '${req.body.password}')`;

  console.log("Running query: " + req.body.username + " " + req.body.password);

  db.query(ADD_QUERY, (err) => {
    if (err) console.log(err);
    else console.log("details added");
  });
});

app.post("/", (req, res) => {
  const ADD_QUERY = `select * from loginsys.loginuser where user_name= '${req.body.username}' and user_pass='${req.body.password}'`;

  db.query(ADD_QUERY, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (result) {
        console.log("logged in " + result);
      } else {
        console.log("invalid user details or user does not exists");
      }
    }
  });
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
