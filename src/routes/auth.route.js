const express = require("express");
const { login, register, profile } = require("../controllers/auth.controller");
const authMiddleware = require("../middleware/auth.middleware");
const router = express.Router();

router.post('/login', login)
router.post('/register', authMiddleware, register)
router.get('/profile', authMiddleware, profile)


module.exports = router
