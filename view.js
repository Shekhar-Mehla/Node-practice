import fs from "fs";
import path from "path";

const filePath = path.join(path.resolve(), "test.csv");
fs.readFile(filePath, "utf8", (error, data) => {
  error ? console.log(error) : recieveDataFromFile(data.split("\n"));
});
completeData = [];
const recieveDataFromFile = (array) => {
  const name = array.map((item) => {
    return `<li>Name : ${item.split(",")[0]}  email :${
      item.split(",")[1]
    }</li> `;
  });
  completeData = name;
};
console.log(completeData);

