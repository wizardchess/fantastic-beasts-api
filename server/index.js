const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Configure app for bodyParser()
app.use(bodyParser.urlencoded( { extended: true }));
//Let us grab data from the body of a POST
app.use(bodyParser.json());

//Set up port for server to listen on
//You can set environment variables and if we have an environment variable 
//set for the part
//It will use that, if we don't, it's going to be port 3000
const port = process.env.PORT || 3000;

//Connect to DB
//mongodb is the protocol just like http
//270917 is the port that mongodb is listening on
//After writing the port it's basically an url
//The name of our database is codealong
mongoose.connect('mongodb://localhost:27017/fantastic-beasts');

//API Routes
//express.Router() is going to handle all the routing
const router = express.Router();

//Routes will all be prefixed with /api
app.use('/api', router);

//Middleware for validations
//Stop requests from continuing to the routes until it knows it is safe
router.use((req, res, next) => {
  console.log('FYI... some processing currently going down');
  next();
});

router.get('/', (req, res) => {
  res.json({message: 'Here are all the fantastic beasts!'});
});

app.listen(port);
