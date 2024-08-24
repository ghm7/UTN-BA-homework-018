const router = require('express').Router();
const login = require('./login.routes');
const admin = require('./admin.routes');

router.use('/login', login);
router.use('/admin', admin);

module.exports = router;
