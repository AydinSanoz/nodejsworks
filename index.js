const express = require("express");
const app = express();
const port = 5000;
const host = "http://localhost";
app.get("*", (req, res) => {
  console.log("req url", req.url);
  console.log("req baseUrl", req.baseUrl);
  console.log("req original Url", req.originalUrl);
  console.log("req path", req.path);
  console.log("req query", req.query);
  const clientNumber = req.query.no;
  res.send(`Your number is ${clientNumber}`);
});
app.listen(port, () => {
  console.log(`I'm listening on ${host}:${port}`);
});