import express from "express";
import path from "path";
const server = express();
const __dirName = path.resolve();
server.use(express.urlencoded({ extended: true }));
// home page controller
server.use(express.static(path.join(__dirName, "public")));
server.get("/", (req, res) => {
  console.log(req.query);
  res.sendFile(__dirName + "/index.html");
});
// login page controller

server.get("/login", (req, res) => {
  console.log(req.body);
  res.sendFile(__dirName + "/login.html");
});

// handlig the data recived from the form
server.post("/login", (req, res) => {
  console.log(req.body);
  res.sendFile(__dirName + "/login.html");
});

// // register page controller
server.post("/register", (req, res) => {
  console.log(req.query);
  res.sendFile(__dirName + "/register.html");
});
server.get("/register", (req, res) => {
  console.log(req.query);
  res.sendFile(__dirName + "/register.html");
});
const PORT = 8000;
server.listen(PORT, (err) => {
  err ? console.log(err) : console.log("http//localhost:8000");
});
