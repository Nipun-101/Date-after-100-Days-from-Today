let add = require("date-fns/add");
const express = require("express");

const appDate = express();

appDate.get("/", (request, response) => {
  const result = add(new Date(), {
    days: 100,
  });
  response.send(
    `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`
  );
});

module.exports = appDate;
