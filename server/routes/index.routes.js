const router = require('express').Router();
const login = require('./login.routes');

router.use('/login', login);

module.exports = router;
