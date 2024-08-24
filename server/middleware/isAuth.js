function isAuth(req, res, next) {
  const { user } = req.session;

  if (!user) {
    res.status(401).json({ error: 'Usuario no autorizado' });
  }

  next();
}

module.exports = isAuth;
