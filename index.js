const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT ?? 3000;
const route = require("./routes/index");

app.use(express.json());
express.urlencoded({
  extended: true,
});
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
});

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port: localhost:${port}`);
});
