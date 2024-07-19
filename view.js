export const recieveDataFromFile = (array) => {
  const name = array.map((item) => {
    return `<li>Name : ${item.split(",")[0]}  email :${
      item.split(",")[1]
    }</li> `;
  });
  `<ul>${name}</ul>`;
};
