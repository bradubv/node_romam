var express = require('express');

var app = express();
var proverb = require('./lib/proverb.js');
var handlebars = require('express3-handlebars')
  .create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
  res.locals.showTests = app.get('env') !== 'production' &&
    req.query.test === '1';
    next();
});

app.get('/', function(req, res) {
  res.render('home');
});

app.get('/about', function(req, res) {
  var randomProverb = 
  res.render('about', { 
    proverb: proverb.getProverb(),
    pageTestScript: '/qa/tests-about.js' 
  });
});

app.get('/projects/school', function(req, res){
  res.render('projects/school');
});

app.get('/projects/events', function(req, res) {
  res.render('projects/events');
});

app.get('/projects/volunteer', function(req, res) {
  res.render('projects/volunteer');
});

// custom 404 page
app.use( function(req, res) {
  res.status(404);
  res.render('404');
});

app.use( function(err, req, res, next) {
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen( app.get('port'), function() {
  console.log('Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.');
});
