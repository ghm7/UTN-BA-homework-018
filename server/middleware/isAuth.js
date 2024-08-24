const md5 = require('md5');

function isAuth(req, res, next) {
  const reqUser = req.body.user;
  const reqPass = md5(req.body.password);

  if (reqUser !== user || reqPass !== password) {
    res.status(401).json({ error: 'Usuario no autorizado' });
  }

  next();
}

module.exports = isAuth;
