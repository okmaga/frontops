const express = require("express");

const app = express();

const DATE_SERVER_HOST =
  process.env.DATE_SERVER_HOST || "http://localhost:3005";

app.get("/", async (req, res) => {
  const fetch = (await import("node-fetch")).default;
  fetch(DATE_SERVER_HOST)
    .then((res) => res.json())
    .then((date) => {
      res.send(`Hello! Current date is ${date}\n`);
    });
});

app.listen("3000", () => {
  console.log("Ready");
});
