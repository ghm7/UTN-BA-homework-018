const md5 = require('md5');

function checkAuth(data, req) {
  const fixedReq = JSON.parse(JSON.stringify(req));

  const reqUser = fixedReq.user;
  const reqPass = md5(fixedReq.password);
  const { user, password } = data;

  return reqUser === user && reqPass === password;
}

module.exports = checkAuth;
