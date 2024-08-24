const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const index = require('./routes/index.routes');

const app = express();
const port = 5000;

app.use(morgan('dev'));

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 } }));
app.use(express.json());
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
  })
);
app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../client/build')));
app.use('/', index);

// React app route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
