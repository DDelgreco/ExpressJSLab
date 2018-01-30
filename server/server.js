const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

let app = express();

// app.get("/", (req, res) => {
//   res.send("Hello from the web server side...");
// });

app.use(bodyParser.urlencoded({ extended: false }));
app.post("/contact-form", (req, res, next) => {
  res.send("Thank you for submitting this information!");
  next();
});

app.use("/formsubmissions/:submission", (req, res) => {
  let submission = requsest.params.firstName;E
  

app.use(express.static(path.join(__dirname, "../public")));

app.listen(3000, console.log("Server running on port 3000"));
