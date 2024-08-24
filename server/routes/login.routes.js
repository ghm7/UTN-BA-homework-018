const router = require('express').Router();
const checkAuth = require('../lib/checkAuth');
const usersModel = require('../models/usersModel');

router.get('/', (req, res) => {
  res.render('login', { title: 'Admin Login' });
});

router.post('/', async function (req, res, next) {
  try {
    const user = req.body.user;
    const password = req.body.password;

    const data = await usersModel.getUser(user, password);

    if (data != undefined && checkAuth(data, req.body)) {
      // res.send(data);
      req.session.id = data.id;
      req.session.user = data.user;
      res.redirect('/admin');
    } else {
      res.redirect('/');
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
