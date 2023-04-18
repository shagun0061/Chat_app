const express = require("express");
const { connect } = require("./config/connect");
require("dotenv").config();

const app = express();

app.listen(process.env.PORT, async () => {
  try {
    await connect;
    console.log("connect To DB 🚩");
  } catch (error) {
    console.log("error is ",error);
  }
  console.log(`server is running  on ${process.env.PORT} `);
});
