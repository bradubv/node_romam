var Browser = require('zombie'),
  assert = require('chai').assert;

var browser;

suite('Cross-Page Tests', function(){
  setup(function() {
    browser = new Browser();
  });

  test('volunteering from school project page ' +
    'should populate the referrer field', function(done) {
    var referrer = 'http://localhost:3000/projects/school';
    browser.visit(referrer, function() {
      browser.clickLink('.volunteer', function() {
        //fix from https://github.com/EthanRBrown/web-development-with-node-and-express/issues/48
        var referrerUrl = browser.resources[0].request.headers._headers[0][1];
        //this is the equivalent of what the book says and it doesn't work because of a zombie bug
        //var referrerUrl = browser.field('referrer').value;
        assert(referrerUrl === referrer);
        done();
      });
    });
  });

  test('volunteering from the events page ' +
    'should populate the referrer field', function(done) {
    var referrer = 'http://localhost:3000/projects/events';
    browser.visit(referrer, function() {
      browser.clickLink('.volunteer', function() {
        var referrerUrl = browser.resources[0].request.headers._headers[0][1];
        //assert(browser.field('referrer').value === referrer);
        assert(referrerUrl === referrer);
        done();
      });
    });
  });

  test('visiting the "volunteer" page directly should result ' +
    'in an empty referrer field', function(done) {
    browser.visit('http://localhost:3000/projects/volunteer',
      function() {
        assert(browser.field('referrer').value === '');
        done();
    });
  });
});