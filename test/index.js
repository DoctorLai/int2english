var should = require('chai').should(),
    module = require('../index'),
    IntegerToEnglish = module.IntegerToEnglish;

describe('zero', function() {
  it('0', function() {
    IntegerToEnglish(0).should.equal('Zero');
  });
});

describe('positive', function() {
  it('1', function() {
    IntegerToEnglish(1).should.equal('One');
  });  
  it('123', function() {
    IntegerToEnglish(123).should.equal('One Hundred Twenty Three');
  });  
});

describe('negative', function() {
  it('-1', function() {
    IntegerToEnglish(-1).should.equal('Negative One');
  });  
  it('123', function() {
    IntegerToEnglish(-123).should.equal('Negative One Hundred Twenty Three');
  });  
});

