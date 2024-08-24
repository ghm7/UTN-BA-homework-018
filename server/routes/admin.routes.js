const router = require('express').Router();
const isAuth = require('../middleware/isAuth');

router.get('/', isAuth, (req, res) => {
  res.render('admin', { title: 'Admin Login' });
});

module.exports = router;
