'use strict';
var expect = require('chai').expect;
var gameFunctions = require('../scripts/gameFunctions.js');

describe('validateYesNo', function() {
	it('should exist', function() {
		expect(gameFunctions.validateYesNo).not.to.be.undefined;
	});
	it('should return true if "y" is passed in', function() {
		expect(gameFunctions.validateYesNo('y')).to.be.true;
	});
	it('should return true if "yes" is passed in', function() {
		expect(gameFunctions.validateYesNo('yes')).to.be.true;
	});
	it('should return true if "Y" is passed in', function() {
		expect(gameFunctions.validateYesNo('Y')).to.be.true;
	});
	it('should return true if "YES" is passed in', function() {
		expect(gameFunctions.validateYesNo('YES')).to.be.true;
	});
	it('should return true if "YEs" is passed in', function() {
		expect(gameFunctions.validateYesNo('YEs')).to.be.true;
	});
	it('should return false if "n" is passed in', function() {
		expect(gameFunctions.validateYesNo('n')).to.be.false;
	});
	it('should return false if "no" is passed in', function() {
		expect(gameFunctions.validateYesNo('no')).to.be.false;
	});
	it('should return false if "N" is passed in', function() {
		expect(gameFunctions.validateYesNo('N')).to.be.false;
	});
	it('should return false if "NO" is passed in', function() {
		expect(gameFunctions.validateYesNo('NO')).to.be.false;
	});
	it('should return false if "No" is passed in', function() {
		expect(gameFunctions.validateYesNo('No')).to.be.false;
	});
	it('should return null if "abc" is passed in', function() {
		expect(gameFunctions.validateYesNo('abc')).to.be.null;
	});
});