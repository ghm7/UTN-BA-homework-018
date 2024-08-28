const md5 = require('md5');

function checkAuth(data, req) {
  const fixedReq = JSON.parse(JSON.stringify(req));

  const userDB = data.filter((item) => item.user === fixedReq.user)[0];

  const reqUser = fixedReq.user;
  const reqPass = md5(fixedReq.password);
  const { user, password } = userDB;

  return reqUser === user && reqPass === password;
}

module.exports = checkAuth;
