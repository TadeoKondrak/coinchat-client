var assert = require('assert');
var should = require('should');

var Client = require(__dirname+'/../lib/dogechat-client.js');

describe('Dogechat Client', function() {
  describe('Creating a new instance', function() {
    it('should throw an error when no username is given', function() {
      (function(){
        var instance = new Client({
          password: 'plzdontchange'
        });
      }).should.throw();
    });

    it('should throw an error when no password or session is given', function() {
      (function(){
        var instance = new Client({
          username: 'dogechatclient'
        });
      }).should.throw();
    });

    it('should return a new instance when username and password are specified', function() {
      var instance = new Client({
        username: 'dogechatclient',
        password: 'plzdontchange'
      });
    });
  });

  describe('Connect to host', function() {
    var instance = null;

    before(function() {
      instance = new Client({ username: 'dogechatclient', password: 'plzdontchange' });
    });

    after(function() {
      instance = null;
    });

    it('should return true if connecting', function() {
      instance.connect().should.be.true;
    });

    it('should call callback when connected', function(done) {
      done();
    });

    it('should return false when already connected', function() {
      instance.connected = true;
      instance.connect().should.be.false;
    });
  });
});
