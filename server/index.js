const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Beast = require('./models/beasts');

console.log('dirname is', __dirname);
app.use('/', express.static(`${__dirname}/../public`));
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

//Route to find and post a beast
router.route('/beasts')
   .post((req, res) => {
      const beast = new Beast();
      beast.name = req.body.name;
      beast.classification = req.body.classification;
      beast.location = req.body.location;

      beast.save(err => {
        if (err) {
          res.send(err);
        }
        res.json({ message: 'Beast was successfully saved'});
      });
   })
   .get((req, res) => {
     Beast.find((err, beasts) => {
       if (err) {
         res.send(err);
       }

       res.json( beasts );
     });
   });

//Route to find beasts by classification
router.route('/beasts/classification/:classification')
	.get((req, res) => {
       Beast.find( { classification: req.params.classification }, (err, beast) => {
         if (err) {
           res.send(err);
         }
         res.json( beast );
       });
	});

//Route to search beast by name
router.route('/beasts/:name')
   .get((req, res) => {
     Beast.find( { name: req.params.name }, (err, beast) => {
       if (err) {
         res.send(err);
       }
       res.json( beast );
     });
   });

router.route('/beasts/location/:location')
   .get((req, res) => {
     Beast.find( { location: req.params.location }, (err, beast) => {
       if (err) {
         res.send(err);
       }
       res.json( beast );
     });
   });

app.listen(port);
