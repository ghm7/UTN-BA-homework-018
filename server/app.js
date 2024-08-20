const express = require('express');
const session = require('express-session');
const { engine } = require('express-handlebars');
const path = require('path');
const usersModel = require('./models/usersModel');

const app = express();
const port = 5000;

app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
  })
);
app.set('view engine', 'hbs');
app.use(session({ secret: 'SECRET_WORD', cookie: { maxAge: 60000 } }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/build')));

// Handlebars routes
app.get('/login', (req, res) => {
  res.render('login', { title: 'Admin Login' });
});

app.post('/login', async function (req, res, next) {
  try {
    const user = req.body.user;
    const password = req.body.password;

    const data = await usersModel.getUser(user, password);
    if (data != undefined) {
      req.session.id = data.id;
      req.session.user = data.user;
      res.redirect('/admin');
    } else {
      res.render('admin');
    }
  } catch (error) {
    console.log(error);
  }
});

app.get('/admin', (req, res) => {
  res.render('admin', { title: 'Admin Login' });
});

// React app route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
