const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

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
app.use(express.static(path.join(__dirname, '../client/build')));

// Handlebars routes
app.get('/login', (req, res) => {
  res.render('login', { title: 'Admin Login' });
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
