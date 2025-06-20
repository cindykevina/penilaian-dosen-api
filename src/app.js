// src/app.js
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const bodyParser = require("body-parser");
// const errorHandler = require("./middlewares/errorHandler");

const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: "https://penilaian-dosen-fe.vercel.app",
  credentials: true
}));
app.use(express.json());
app.use("/api", routes); // Prefix semua route dengan /api

// app.use(errorHandler); // Global error handler

module.exports = app;
