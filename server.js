import express from "express";
import path from "path";
const server = express();
const __dirName = path.resolve();

server.use(express.static(path.join(__dirName, "public")));
server.get("/", (req, res) => {
  res.sendFile(__dirName + "/index.html");
});
const PORT = 8000;
server.listen(PORT, (err) => {
  err ? console.log(err) : console.log("http//localhost:8000");
});
