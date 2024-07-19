import express from "express";
import path from "path";
import fs from "fs";
import { recieveDataFromFile } from "./view.js";

const server = express();
const __dirName = path.resolve();
server.use(express.urlencoded({ extended: true }));
// home page controller
server.use(express.static(path.join(__dirName, "public")));
server.get("/", (req, res) => {
  // console.log(req.query);
  res.sendFile(__dirName + "/index.html");
});
// login page controller

server.get("/login", (req, res) => {
  // console.log(req.body);
  res.sendFile(__dirName + "/login.html");
});

// handlig the data recived from the form
server.post("/login", (req, res) => {
  // console.log(req.body);
  res.sendFile(__dirName + "/login.html");
});

// // register page controller
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
  // reading  data from file
  fs.readFile(fileName, "utf8", (error, data) => {
    error
      ? console.log(error)
      : res.send(recieveDataFromFile(data.split("\n")));
  });
});
server.get("/register", (req, res) => {
  res.sendFile(__dirName + "/register.html");
});

// end
const PORT = 8000;
server.listen(PORT, (err) => {
  err ? console.log(err) : console.log("http//localhost:8000");
});
