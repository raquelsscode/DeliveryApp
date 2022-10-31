const errors = {
  ValidationError: 400,
  BadRequest: 400,
  NotFound: 404,
  Unauthorized: 401,
  Conflict: 409,
};

const errorHandler = ({ name, message }, _req, res, _next) => {
  const status = errors[name];
  if (!status) return res.status(500).json({ message });
  return res.status(status).json({ message });
};

module.exports = errorHandler;