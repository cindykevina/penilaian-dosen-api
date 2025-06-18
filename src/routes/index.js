const express = require("express");
const userRoutes = require("./user.route");
const periodeRoutes = require("./periode.route");
const dosenRoutes = require("./dosen.route");
const kriteriaRoutes = require("./kriteria.route");
const subKriteriaRoutes = require("./subkriteria.route");
const authRoutes = require("./auth.route");
const homebaseRoutes = require("./homebase.route");
const formRoutes = require("./form.route");
const authMiddleware = require("../middleware/auth.middleware");
const router = express.Router();

// router.use(authMiddleware);
router.use("/auth", authRoutes);
router.use(authMiddleware)
router.use("/users", userRoutes);
router.use("/periodes", periodeRoutes);
router.use("/dosens", dosenRoutes);
router.use("/kriterias", kriteriaRoutes);
router.use("/sub-kriterias", subKriteriaRoutes);
router.use("/homebases", homebaseRoutes);
router.use("/form", formRoutes);

module.exports = router;
