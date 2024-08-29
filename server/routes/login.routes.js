const router = require('express').Router();
const checkAuth = require('../lib/checkAuth');
const { getUsers } = require('../models/usersModel');

function findUser(user, find) {
  return user.filter((item) => item.user === find)[0];
}

router.get('/', (req, res) => {
  res.render('login', { title: 'Admin Login' });
});

router.post('/', async (req, res) => {
  try {
    const user = req.body.user;
    const password = req.body.password;

    const users = await getUsers(user, password);

    if (users != undefined && checkAuth(users, req.body)) {
      const userData = findUser(users, user);
      req.session.id = userData.id;
      req.session.user = userData.user;

      res.redirect('/admin');
    } else {
      res.redirect('/');
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
