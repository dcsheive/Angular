var express = require('express');

var app = express();

app.use(express.static( __dirname + '/angular/dist/angular' ));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var session = require('express-session')
app.use(session({
    secret: 'codingmojo',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

const flash = require('express-flash');
app.use(flash());

require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)

