'use strict';

let Assertion = require('../../../lib/assert/empty').Assertion;
let AssertionError = require('../../../lib/assert/error');
let chai = require('chai');
let should = require('chai').should();
let empty;

describe('empty assertion', () => {

  beforeEach(() => {
    empty = new Assertion({subject: 'web page'});
  });

  it('should check for something to be empty', () => {
    empty.assert(null);
    chai.expect(() => empty.negate(null)).to.throw(AssertionError);
  });

  it('should check for something not to be empty', () => {
    empty.negate('something');
    chai.expect(() => empty.assert('something')).to.throw(AssertionError);
  });

  it('should provide nice assert error message', () => {
    empty.params.value = '/nothing';
    let err = empty.getFailedAssertion();
    err.inspect().should.equal("expected web page '/nothing' to be empty");
  });

  it('should provide nice negate error message', () => {
    empty.params.value = '/nothing';
    let err = empty.getFailedNegation();
    err.inspect().should.equal("expected web page '/nothing' not to be empty");
  });


});
