var express = require('express');

var app = express();

var proverbs = [
  "Cine se scoala de dimineata, cade singur in ea.",
  "Cine alearga dupa doi iepuri, se aduna.",
  "Cine se aseamana, nu prinde nici unul",
  "Cum iti asterni, cel cu un ochi este imparat",
  "In tara orbilor, asa dormi"
];

var handlebars = require('express3-handlebars')
  .create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('home');
});

app.get('/about', function(req, res) {
  var randomProverb = 
    proverbs[Math.floor(Math.random() * proverbs.length)];
  res.render('about', { proverb: randomProverb });
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
