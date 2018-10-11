var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    SatJon = require('./models/satModel'),
    bodyParser = require('body-parser')

    mongoose.Promise = global.Promise
    mongoose.connect('mongodb://localhost/Tododb', {useNewUrlParser: true})

    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())
    app.use(function(req, res, next) { 
        // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Origin", "*"); 
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
        res.setHeader('Access-Control-Allow-Credentials', true);
        next(); });
    var routes = require('./routes/satRoute')
    routes(app)

    app.listen(port)

console.log('Sat dimulai melalui port : ' +port)