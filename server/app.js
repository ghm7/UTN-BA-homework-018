const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();
const port = 5000;

// Set up Handlebars as the templating engine
app.engine(
  'hbs',
  engine({
    extname: '.hbs', // Specify the extension as .hbs
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
  })
);
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, '../client/build')));

// Handlebars routes
app.get('/login', (req, res) => {
  res.render('login', { title: 'SSR' });
});

// React app route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
