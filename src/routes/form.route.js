const express = require("express");
const { getForm, store, show, getPenilaian } = require("../controllers/form.controller");
const router = express.Router();

router.get("/get-form", getForm);
router.post("/submit", store);
router.post("/get-saw", show);
router.get("/get-penilaian/periode/:periodeId/dosen/:dosenId", getPenilaian);

module.exports = router;
