// Get our dependencies
var express = require('express');
var app = express();
var mysql = require("mysql");

const con = mysql.createConnection({
  host: '192.168.130.194',
  user: 'root',
  password: 'password',
  database: 'dbAIK',
  port: '3306'
});

//});

//connection.connect();

//function getMovies(callback) {    
//        connection.query("SELECT * FROM movie_db.movies",
//            function (err, rows) {
//                callback(err, rows); 
//            }
//        );    
//}

//Testing endpoint
app.get('/', function(req, res){
  var response = [{response : 'hello'}, {code : '200'}]
  res.json(response);
})

// Implement the vehicles API endpoint
app.get('/buycars', function(req, res){
  con.query('SELECT * FROM vehicles', (err,vehicles) => {
     if(err) throw err;
     console.log('Data received from Db:');
     console.log(vehicles);
     res.json(vehicles);
   });
 
 })
 
//app.get('/', function(req, res, next) {   
    //now you can call the get-driver, passing a callback function
//    getMovies(function (err, moviesResult){ 
       //you might want to do something is err is not null...      
//       res.json(moviesResult);

//    });
//});

// Implement the reviewers API endpoint
app.get('/vehicles', function(req, res){
  con.query('SELECT * FROM vehicles', (err,vehicles) => {
    if(err) throw err;
    console.log('Data received from Db:');
    console.log(vehicles);
    res.json(vehicles);
  });
  /*
  var vehicles = [
    {name : 'Xerato', description : 'Modern Car 1.6CC', avatar: 'https://www.kia.com/content/dam/kwcms/co/es/images/shoppingtool/Cerato-Showroom.png'},
    {name: 'Pikanto', description : 'Modern Car 1.6CC', avatar: 'https://www.kia.com/content/dam/kwcms/co/es/images/showroom/PicantoNew/kia-co-picanto-ja.png'},
    {name: 'Rio zedan', description : 'Modern Car 1.6CC', avatar: 'https://www.kia.com/content/dam/kwcms/gt/en/images/vehicles/gnb/kia_rio_sc_4dr_17my.png'},
    {name: 'Zoluto', description : 'Modern Car 1.6CC', avatar: 'https://www.kia.com/content/dam/kwcms/gt/en/images/vehicles/gnb/kia_ab_19my.png'},
    {name: 'Stringer', description: 'Modern Car 1.6CC', avatar: 'https://www.kia.com/content/dam/kwcms/co/es/images/showroom/stinger/kia-stinger.png'},
    {name: 'Ant-man', description: 'Modern Car 1.6CC', avatar : 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/4/4b/Luis%27_Van_%28Quantum_Tunnel%29.png/revision/latest/scale-to-width-down/310?cb=20181002134025'},
    {name: 'Rioc Jatchbash', description : 'Modern Car 1.6CC', avatar : 'https://www.kia.com/content/dam/kwcms/gt/en/images/vehicles/gnb/kia-rio-sc.png'}
  ];

  res.json(vehicles);
*/
})

// Implement the publications API endpoint
app.get('/support', function(req, res){
  con.query('SELECT * FROM support', (err,support) => {
    if(err) throw err;
    console.log('Data received from Db:');
    console.log(support);
    res.json(support);
  });
  /*
  var support = [
    {name : 'Mechanics Appointments', avatar: 'glyphicon-eye-open'},
    {name : 'Post-sale service', avatar: 'glyphicon-fire'},
    {name : 'Guarantee', avatar: 'glyphicon-time'},
    {name : 'Online manual', avatar: 'glyphicon-record'},
    {name : 'New AIK', avatar: 'glyphicon-heart-empty'},
    {name : 'safety campaigns', avatar : 'glyphicon-globe'}
  ];

  res.json(support);
*/
})

// Implement the pending reviews API endpoint
app.get('/experience', function(req, res){
  var experience = [
    {title : 'Superman: Homecoming', release: '2017', score: 10, price: 'Chris Harris', publication: 'International Movie Critic'},
    {title : 'Wonder Woman', release: '2017', score: 8, reviewer: 'Martin Thomas', publication : 'TheOne'},
    {title : 'Doctor Strange', release : '2016', score: 7, reviewer: 'Anthony Miller', publication : 'ComicBookHero.com'}
  ]
  res.json(experience);
})
console.log("server listening through port: "+process.env.PORT);
// Launch our API Server and have it listen on port 3000.
app.listen(process.env.PORT || 3000);
module.exports = app;