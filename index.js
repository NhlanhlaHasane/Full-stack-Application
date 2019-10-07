//starts express
const express = require('express');
const app = express();
//setup parser 
const parser = require('body-parser');
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
//setup handlebars
const hbs = require('express-handlebars');
app.set('view engine','hbs');
app.engine('.hbs', hbs({
    extname: '.hbs',
    partialsDir: 'views/',
    layoutsDir: 'views/',
    defaultLayout: 'layout-main'
  }));
//setup cors
const cors = require('cors');
app.use(cors());
app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})
app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})
//controllers setup
const controller1Controller = require('./controllers/controller1');
app.use('api/controller1/', controller1Controller);
//second controller
const controller2Controller = require('./controllers/controller2');
app.use('api/controller2/', controller2Controller);
//Local host
app.use('/api/controller1/', controller1Controller);
app.listen(8080, () => console.log('We are on Port 8080'));