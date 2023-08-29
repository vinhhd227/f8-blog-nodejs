const express = require('express')
const exphbs = require('express-handlebars'); 
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3000;
// Config static files
app.use(express.static(path.join(__dirname, 'public')));
// HTTP logger
app.use(morgan('combined'));
// Template engine
app.engine('hbs', exphbs.engine({
  extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', './views');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
    res.render('home');
});
app.get('/news', (req, res) => {
  res.render('news');
});



app.get('/', (req, res) => {
  res.send('<html><head></head><body></body></html>')
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
});