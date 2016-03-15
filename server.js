var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var request = require('request');
var cheerio = require('cheerio');
const PORT = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.use('/scripts', express.static('public/scripts'));

//Require Schema
var noteExample = require('./models/nodeModel.js');
var article =require('./models/article.js');

//Database configuration
mongoose.connect('mongodb://localhost/newsnotes');
var db = mongoose.connection;

db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});
db.once('open', function() {
  console.log('Mongoose connection successful.');
});





app.get('/', function(req, res){
request('https://www.csmonitor.com', function (error, response, body) {
  var results = [];
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(body);
    $('h3.story_headline', '#ui-page-contents').each(function(i, elem){
         var articleTitle = $(elem).text();
         //var articleLink = $(elem).attr('href');
         var insertedArticle = new Article({
          title: articleTitle,
          //link: articleLink
         });
         console.log(results);
    insertedArticle.save(function(err, dbArticle) {
      if(err) {
        console.log(err);
      }else {
        console.log(dbArticle)
         }
       });
     });
    res.render('index.html');
   };
  }); 
});

app.get('/displayInfo', function(req, res) {
  Article.find({}, function(err, articleData) {
    if(err) {
      throw err;
    }
    res.json(articleData);
  });
});

app.post('/submit', function(req, res) {
  var note = new Note(req.body);
  node.save(function(err, doc){
    if (err) {
      res.send(err);
    } else {
      res.send(doc);
    }
    });
  });

app.listen(PORT, function(req, res) {
  console.log('App running on port', PORT);
});