const router = require('express').Router();
const isAuth = require('../middleware/isAuth');
const { getUsers, updateRole } = require('../models/usersModel');
const { trashIcon, editIcon } = require('../icons/allIcons');
const checkAuth = require('../lib/checkAuth');

function injectUsers(users) {
  let string = '';

  users.forEach((item) => {
    string += `<tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-200">${item.user}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-neutral-200 text-center">${item.role}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-neutral-200 flex gap-5 justify-end"><div onclick="edit(${item.id})">${editIcon}</div>${trashIcon}</td>
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

router.put('/edit/:id', isAuth, async (req, res) => {
  const { id } = req.params;
  const { role } = req.body;
  const users = await getUsers();
  const [user] = users.filter((item) => item.id === Number(id));

  updateRole(user, role);

  res.render('admin', {
    title: 'Admin Login',
    users: injectUsers(users),
  });
});

module.exports = router;
