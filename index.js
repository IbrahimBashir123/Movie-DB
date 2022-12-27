const { response } = require("express");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("ok"));
app.get("/test", (req, res) => res.send(`{status:200, message:"ok"}`));
app.get("/time", (req, res) => res.send(`{status:200, message:<20:23>}`));
app.listen(port, () => {  console.log("server is at http://localhost:3000");
});
