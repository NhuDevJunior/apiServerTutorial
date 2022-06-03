const express = require("express");
const cors = require("cors");
const app = express();
var port_error = 8080;

var corsOptions = {
  origin: "https://crudtutorial.herokuapp.com"
  // origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
require("./app/routes/tutorial.routes.js")(app);
// set port, listen for requests
const PORT = process.env.PORT || port_error;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});