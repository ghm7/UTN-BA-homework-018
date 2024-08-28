const router = require('express').Router();
const isAuth = require('../middleware/isAuth');
const { getUsers } = require('../models/usersModel');
const { trashIcon, editIcon } = require('../icons/allIcons');

function injectUsers(users) {
  let string = '';

  users.forEach((item) => {
    string += `<tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-200">${item.user}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-neutral-200 text-center">${item.role}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-neutral-200 flex gap-5 justify-end"><div onclick="callReq()">${editIcon}</div>${trashIcon}</td>
              </tr>`;
  });

  return string;
}

router.get('/', isAuth, async (req, res) => {
  res.render('admin', {
    title: 'Admin Login',
    users: injectUsers(await getUsers()),
  });
});

module.exports = router;
