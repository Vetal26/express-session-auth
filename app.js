const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
var passport = require('passport');
var crypto = require('crypto');
var routes = require('./routes');
const connection = require('./config/database');

const MongoStore = require('connect-mongo')(session);

require('./config/passport');

require('dotenv').config();

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

app.listen(3000);
