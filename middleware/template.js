const fs = require("fs");
const path = require("path");

const Template = (req, res, next) => {
  fs.readFile(
    path.join(__dirname, "../ui/index.html"),
    "utf-8",
    (err, data) => {
      req.body.html = data;
      next();
      // res.send('hi')
    }
  );
};

module.exports = Template;
