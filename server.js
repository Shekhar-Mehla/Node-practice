import express from "express";
const server = express();
server.get("/", (req, res) => {
  res.json({ name: "shekhar" });
});
const PORT = 8000;
server.listen(PORT, (err) => {
  err ? console.log(err) : console.log("http//localhost:8000");
});
