const express = require("express");

const app = express();
const SendMail = require("./middleware/email");
const Template = require("./middleware/template");
const port = process.env.PORT || 5000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hi!");
});

app.post("/send", Template, SendMail, (req, res) => {
  res.send("mail send");
});

app.listen(port, () => {
  console.log("working");
});
