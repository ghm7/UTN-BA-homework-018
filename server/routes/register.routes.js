const router = require('express').Router();
const md5 = require('md5');
const { registerUser } = require('../models/usersModel');

router.get('/', (req, res) => {
  res.render('register', { title: 'Register Page' });
});

router.post('/', async (req, res) => {
  try {
    const user = req.body.user;
    const password = md5(req.body.password);

    if (await registerUser(user, password)) {
      res.redirect('/login');
    } else {
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
