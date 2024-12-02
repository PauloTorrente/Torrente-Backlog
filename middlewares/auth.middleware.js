const authenticate = (req, res, next) => {
  // Placeholder for authentication logic (e.g., JWT validation)
  req.user = { role: 'admin' }; // Mock user for now
  next();
};

module.exports = { authenticate };
