const jwt = require("jsonwebtoken");
const response = require("../utils/response");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return response.error(res, "Token tidak ditemukan", 401);
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // simpan payload user
    next();
  } catch (err) {
    return response.error(res, "Token tidak valid", 403);
  }
};

module.exports = authMiddleware;
