// middleware/role.js
const response = require("../utils/response");

const role = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return response.error(res, "Akses ditolak", 403);
  }
  next();
};

module.exports = role;
