const { response } = require("express");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("ok"));
app.get("/test", (req, res) => res.send(`{status:200, message:"ok"}`));
app.get("/time", (req, res) => {
  let date_Timing = new Date();

  let hours = date_Timing.getHours();
  let minutes = date_Timing.getMinutes();
  let dateTime = hours + ":" + minutes;

  const response = {
    status: 200,
    message: dateTime,
  };

  res.send(response);
});

app.listen(port, () => {
  console.log("server is at http://localhost:3000");
});
