const express = require("express");
const {
  index,
  store,
  show,
  findData,
  update,
  destroy,
  getDosenByPeriode,
} = require("../controllers/dosen.controller");
const router = express.Router();

router.get("/", index);
router.post("/", store);
router.get("/:id", findData, show);
router.get("/periode/:periodeId", getDosenByPeriode);
router.put("/:id", findData, update);
router.delete("/:id", findData, destroy);

module.exports = router;
