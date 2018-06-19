var express = require('express');

var app = express();

app.use(express.static( __dirname + '/public/dist/public' ));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

app.listen(8000, function() {
    console.log("listening on port 8000");
})