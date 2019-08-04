// server.js

var express=require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

config = require('./DB');
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database' + err) }
);

const appointmentRoute = require('./routes/appointment.route');

var app=express();
app.use(bodyParser.json());
app.use(cors());
app.use('/appointments', appointmentRoute);

app.get('/',function(req,res)
{
res.send('Hello World!'); 
});

const port = process.env.PORT || 3000;
var server=app.listen(port,function() {
    console.log('Listening on port ' + port);
});

// const express = require('express'),
//     path = require('path'),
//     bodyParser = require('body-parser'),
//     cors = require('cors'),
//     mongoose = require('mongoose');
// config = require('./DB');

// const appointmentRoute = require('./routes/appointment.route');
// // console.log(appointmentRoute);
// mongoose.Promise = global.Promise;
// mongoose.connect(config.DB, { useNewUrlParser: true }).then(
//     () => { console.log('Database is connected') },
//     err => { console.log('Can not connect to the database' + err) }
// );

// const app = express();
// app.use(bodyParser.json());
// app.use(cors());
// app.use('/appointments', appointmentRoute);
// // const port = process.env.PORT || 4000;
// app.get('/',function(req,res)
// {
// res.send('Hello World!');
// });
// const port = 3000;
// const server = app.listen(function () {
//     console.log('Listening on port ' + port);
// });

