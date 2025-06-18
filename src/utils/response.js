// utils/response.js

function success(res, data = null, message = "Success", statusCode = 200) {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
}

function error(
  res,
  message = "Internal Server Error",
  statusCode = 500,
  errors = null
) {
  return res.status(statusCode).json({
    success: false,
    message,
    errors,
  });
}

function paginated(
  res,
  data = [],
  pagination = {},
  message = "Success",
  statusCode = 200
) {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
    pagination,
  });
}

module.exports = {
  success,
  error,
  paginated,
};
