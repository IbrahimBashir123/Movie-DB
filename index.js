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
app.get("/search", (req, res) => {
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

//With Express, create four routes: /movies/create, /movies/read, /movies/update, and /movies/delete, where these routes can answer anything (we will change it later)

const movies = [
  { title: "Jaws", year: 1975, rating: 8 },
  { title: "Avatar", year: 2009, rating: 7.8 },
  { title: "Brazil", year: 1985, rating: 8 },
  { title: "الإرهاب والكباب‎", year: 1992, rating: 6.2 },
];

app.get("/movies", (req, res) => {
  res.json({ status: 200, message: "Movies" });
});
app.get("/movies/create", (req, res) => {
  res.json({ status: 200, message: "add" });
});
app.get("/movies/read", (req, res) => {
  res.json({ status: 200, data: movies });
});
app.get("/movies/update", (req, res) => {
  res.json({ status: 200, message: "edit" });
});
app.get("/movies/delete", (req, res) => {
  res.json({ status: 200, message: "delete" });
});


// Sorting by date/rate/title step 6
app.get("/movies/read/by-date", (req, res) => {
  res.json({
    status: 200,
    data: movies.sort((a, b) => {
      if (a.year < b.year) {
        return 1;
      }
      if (a.year > b.year) {
        return -1;
      }
      return 0;
    }),
  });
});
app.get("/movies/read/by-rating", (req, res) => {
  res.json({
    status: 200,
    data: movies.sort((a, b) => {
      if (a.rating < b.rating) {
        return 1;
      }
      if (a.rating > b.rating) {
        return -1;
      }
      return 0;
    }),
  });
});

app.get("/movies/read/by-title", (req, res) => {
  res.json({
    status: 200,
    data: movies.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    }),
  });
});
// -----

app.listen(port, () => {
  console.log("server is at http://localhost:3000");
});
