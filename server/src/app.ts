///<reference path="./../typings/tsd.d.ts" />

import express = require('express'); 					//import express module from dafinatelytyped file (d.ts)
import path = require('path'); 							//import path module (builten module from express/node)
import bodyParser = require('body-parser'); 			//import body-parser module/third party middleware
import mongoose = require('mongoose'); 					//import mongodb driver
import * as helper from './helpers/helper';                 //helper

mongoose.connect('mongodb://localhost:27017/taskManagement');	//connect to mongodb

//Imports Routers
import userRoutes = require("./user/userRouter"); 		                            //Import/Initialze Router for index/homepage
import memberRoutes = require("./member/memberRouter"); 		//Import/Initialze Router for index/homepage
import teamRoutes = require("./team/teamRouter"); 			//Import/Initialze Router for todo
//import taskRoutes = require("./task/taskRouter/"); 			//Import/Initialze Router for Quiz

//Start Express
let app: express.Express = express();						//Start Express

//logger middle ware
app.use((req, res, next) => {									//Logging on console
    console.log('Logging: ' + req.method.toString() + ': ' + req.url.toString());
    next();
});

//Middlewaress
app.use(bodyParser.json());										//Using bodyparser for getting post request variables (to support application/JSON-encoded bodies)
app.use(bodyParser.urlencoded({ extended: false }))				//parse application/x-www-form-urlencoded (to support URL-encoded bodies)
app.use(express.static(path.join(__dirname, './../../client/build')));	//defining static path for current project

//Get port from environment and store in Express. 
var port: number = process.env.PORT || 4000;		//Defining port number

//set vairiables in Express
app.set('port', port);
app.set('env', 'development');
app.set('address', 'localhost') 


// //for angular routes
// var angularRoutes = [
//     "/about"
// ]
// app.use(angularRoutes, function(req, res){
//     res.sendFile(path.join(__dirname, './../client/build/index.html'))
// })

//Handle Routes after some middlewares
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './../../client/build/index.html'));
});


app.use('/api/user', userRoutes);
app.use('/api/member', memberRoutes);
app.use('/team', teamRoutes);
//app.use('/task', taskRoutes);

// app.get('*', (req, res) => {										//catching unknown route
//     //res.send("Error: 404");
//     res.render('shared/_layout', {
//         message: "Error: 404, The Page Cannot Find.",
//         error: {},
//         items: null, title: "Err", view: "_err"
//     });
// });


// //Catching Middleware Errors
// app.use((err: any, req, res, next) => {							//Catching errors from middleware (app.use takes fur params.)
//     if (app.get('env') === 'development') { 
//         // development error handler 
//         // will print stacktrace 
//         res.status(err.status || 500);
//         res.render('shared/_layout', {
//             message: err.message,
//             error: err,
//             items: null, title: "Err", view: "_err"
//         });

//     } else {
//         // production error handler 
//         // no stacktraces leaked to user 
//         res.status(err.status || 500);
//         res.render('shared/_layout', {
//             message: err.message,
//             error: {},
//             items: null, title: "Err", view: "_err"
//         });
//     } //else closing
// });

//helper init()  for dummy data
helper.init();

//Starting / Listening 
var server = app.listen(port, () => {							//start listner
    var listeningPort: number = server.address().port;
    console.log('The server is listening on: ' + app.get('address') + ':' + listeningPort);
});