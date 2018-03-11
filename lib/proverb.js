var proverbs = [
  "Cine se scoala de dimineata, cade singur in ea.",
  "Cine alearga dupa doi iepuri, se aduna.",
  "Cine se aseamana, nu prinde nici unul",
  "Cum iti asterni, cel cu un ochi este imparat",
  "In tara orbilor, asa dormi",
];

exports.getProverb = function() {
  var idx = Math.floor(Math.random() * proverbs.length);
  return proverbs[idx];
};