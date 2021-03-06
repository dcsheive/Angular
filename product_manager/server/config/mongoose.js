const path = require('path');
const fs = require('fs')
const mongoose = require('mongoose');
var models_path = path.join(__dirname, './../models');
mongoose.connect('mongodb://localhost/products');
mongoose.Promise = global.Promise;

fs.readdirSync(models_path).forEach(function(file) {
    if(file.indexOf('.js') >= 0) {
        require(models_path + '/' + file);
    }
})
