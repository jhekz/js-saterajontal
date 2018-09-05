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

    var routes = require('./routes/satRoute')
    routes(app)

    app.listen(port)

console.log('Sat dimulai melalui port : ' +port)