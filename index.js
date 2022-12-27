const { response } = require("express");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("ok"));
app.get("/test", (req, res) => res.send(`{status:200, message: ok}`));
app.get("/time", (req, res) => {
  let date_Timing = new Date();

  let hours = date_Timing.getHours();
  let minutes = date_Timing.getMinutes();
  let seconds = date_Timing.getSeconds();
  let dateTime = hours + ":" + minutes + ":" + seconds;

  const response = {
    status: 200,
    message: dateTime,
  };

  res.send(response);
});

// Create a route such as, when the url /hello/<ID> is invoked, answers with: {status:200, message:"Hello, <ID>"}.
app.get(`/hello`, (req, res) => {
  res.send(`{status:200, message: Hello}`);
});
app.get(`/hello/:id`, (req, res) => {
  res.send({ status: 200, message: `Hello, ${req.params.id}` });
});

// Create a route such as, when the url /search?s=<SEARCH> is invoked, answers with {status:200, message:"ok", data:<SEARCH>}
app.get('/search', (req, res) => {
  let search = req.query.s;
  if (search) {
    res.status(200).json({ status: 200, message: "Ok", data: { search } });
  } else {
    res.status(500).json({
      status: 500,
      error: true,
      message: "something went wrong",
    });
  }
});

app.listen(port, () => {
  console.log("server is at http://localhost:3000");
});
