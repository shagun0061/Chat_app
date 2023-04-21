const express = require("express");
const { connect } = require("./config/connect");
const cors = require("cors");
const useRoutes = require("./routes/userRoutes")

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth",useRoutes)
app.listen(process.env.PORT, async () => {
  try {
    await connect;
    console.log("connect To DB 🚩");
  } catch (error) {
    console.log("error is ",error);
  }
  console.log(`server is running  on ${process.env.PORT} `);
});
