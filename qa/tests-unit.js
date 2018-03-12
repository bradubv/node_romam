var proverb = require('../lib/proverb.js');
var expect = require('chai').expect;

suite('Proverb tests', function() {
  test('getProverb() should return a proverb', function() {
    expect(typeof proverb.getProverb() === 'string');
  });
});