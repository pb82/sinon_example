var sinon = require('sinon');
var proxyquire = require('proxyquire');
var assert = require('assert');


var mod = proxyquire('../module', {
  'fs': {
    'exists': sinon.stub().callsArgWith(1, null, true)
  }
});

describe("module test", () => {
  it("should work", (done) => {
    let test = mod.existsFile('dummy', (err, result) => {
      assert.ok(!err);
      assert.ok(result);
      done();
    });  
  });
});
