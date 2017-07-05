const sum = require('../sum.js');
const {expect,assert} = require('chai');

// Reference http://chaijs.com/ for questions

describe ('Sum', function() {

    it ('Should be a function', function() {
      expect(sum).to.be.a('function','sum is not a function');
      assert.isFunction(sum, 'sum is not a function');
    });

    it('Should return 0 if no arguments are passed in.', function() {
      expect(sum()).to.equal(0);
      assert.equal(sum(),0);
    });

    it('Should return ERROR if anything but integers are passed in.', function(){
      expect(sum(1,2,3)).to.equal(6);
      expect(sum([123,4])).to.equal(error);
      expect (sum('a',[],1)).to.equal(error);
    })

});
