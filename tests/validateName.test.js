'use strict';
var expect = require('chai').expect;
var gameFunctions = require('../scripts/gameFunctions.js');

describe('validateName', function() {
	it('should exist', function() {
		expect(gameFunctions.validateName).not.to.be.undefined;
	});
	it('should return false if a number 1 is passed in', function() {
		expect(gameFunctions.validateName(1)).to.be.false;
	});
	it('should return false if an array is passed in', function() {
		expect(gameFunctions.validateName(['a', 'b', 'c'])).to.be.false;
	});
	it('should return false if an empty string is passed in', function() {
		expect(gameFunctions.validateName('')).to.be.false;
	});
	it('should return \'abc\' if a \'abc\' is passed in', function() {
		expect(gameFunctions.validateName('abc')).to.be.equal('abc');
	});
});