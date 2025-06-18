const express = require("express");
const {
  index,
  show,
  store,
  findData,
  update,
} = require("../controllers/user.controller");
const userRoutes = express.Router();

userRoutes.get("/", index);
userRoutes.post("/", store);
userRoutes.get("/:id", findData, show);
userRoutes.put("/:id", findData, update);

module.exports = userRoutes;
