const router = require('express').Router();
const usersModel = require('../models/usersModel');

router.get('/', (req, res) => {
  res.render('login', { title: 'Admin Login' });
});

router.post('/', async function (req, res, next) {
  try {
    const user = req.body.user;
    const password = req.body.password;

    const data = await usersModel.getUser(user, password);
    if (data != undefined) {
      res.send(data);
      req.session.id = data.id;
      req.session.user = data.user;
      // res.redirect('/admin');
    } else {
      res.render('admin');
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
