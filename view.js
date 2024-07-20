export const  recieveDataFromFile =  (array) => {
  const response = array.reduce((acc, item, index) => {
    if (item.length > 0) {
      const name = item.split(",")[0];
      const email = item.split(",")[1];

      return `<tr> ${acc}  <td> ${
        index + 1
      } </td> <td> ${name} </td>  <td> ${email} </td> </tr>`;
    } else {
      return `<tr>${acc}</tr>`;
    }
  }, "");
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="style.css" />

    <title>Document</title>
  </head>
  <body>
    <div class="container">
      <h3 class="text-center">Welcome to our website !</h3>
      <hr />
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="/login">Log in</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="/register">Register</a>
        </li>
      </ul>


<table class="table mt-4">
  <thead>
    <tr>
      <th scope="col">Serial</th>
      <th scope="col">NAME</th>
      <th scope="col">EMAIL</th>
      
    </tr>
  </thead>
  <tbody>
    ${response}
  </tbody>
</table>



      
    </div>
  </body>
</html>

  
  `;
};
