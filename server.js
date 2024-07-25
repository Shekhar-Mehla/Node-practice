import express from "express";
import path from "path";
import fs from "fs";
import { recieveDataFromFile } from "./view.js";

const server = express();
const __dirName = path.resolve();
server.use(express.urlencoded({ extended: true }));
// home page controller
server.use(express.static(path.join(__dirName, "public")));
server.get("/Home", (req, res) => {
  // reading  data from file
  const fileName = __dirName + "/test.csv";
  fs.readFile(fileName, "utf8", (error, data) => {
    if (error) {
      console.log(error);
    } else {
      res.send(recieveDataFromFile(data.split("\n")));
    }
  });
});
// login page controller

server.get("/", (req, res) => {
  // console.log(req.body);
  res.sendFile(__dirName + "/login.html");
});
server.get("/login", (req, res) => {
  // console.log(req.body);
  res.sendFile(__dirName + "/login.html");
});

// handlig the data recived from the form
server.post("/login", (req, res) => {
  // console.log(req.body);
  const { email, password } = req.body;
  const str = `${email},${password}`;
  console.log(str);
  fs.readFile(__dirName + "/test.csv", "utf8", (error, data) => {
    if (error) {
      console.log(error);
    } else {
      if (data.length > 0) {
        data.includes(str)
          ? res.send(`<h3><div class="alert alert-success" role="alert">
        congratulation you have sucessfully login
      </div>
      
              </h3>`)
          : res.send(
              `<h3><div class="alert alert-danger" role="alert">
        you have entered the invalid login details. check your email or password!
      </div>
      
        </h3>`
            );
      } else {
        res.send("no data found");
      }
    }
  });
  // res.sendFile(__dirName + "/login.html");
});

// // register page controller

server.get("/register", (req, res) => {
  res.sendFile(__dirName + "/register.html");
});

server.post("/register", (req, res) => {
  // destructure the object recived from the body
  const { name, email, password } = req.body;

  // converting data to string and then array

  const str = `${name},${email},${password}`;
  // created  the file
  const fileName = `${__dirName}/test.csv`;
  if (fileName) {
    fs.appendFile(fileName, `${str}` + "\n", "utf8", (er) => {
      er ? console.log(er) : console.log("file is updated");
    });
  } else {
    fs.writeFile(fileName, (error) => {
      error ? console.log(error) : console.log("added");
    });
  }

  res.sendFile(__dirName + "/regisrterResponse.html");
});

// end
const PORT = 8000;
server.listen(PORT, (err) => {
  err ? console.log(err) : console.log("http//localhost:8000");
});
