const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/api", (req, res) => {
  console.log(req);
  res.send("ok");
});

app.listen(3000, (err) => {
  if (err) console.log(err);
  else console.log("App listening on port 3000");
});
