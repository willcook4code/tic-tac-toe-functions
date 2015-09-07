'use strict';
var expect = require('chai').expect;
var gameFunctions = require('../scripts/gameFunctions.js');

describe('generateComputerName', function() {
	it('should exist', function() {
		expect(gameFunctions.generateComputerName).not.to.be.undefined;
	});
	it('should return a string', function() {
		expect(typeof gameFunctions.generateComputerName()).to.be.equal('string');
	});
	it('should return a string with a length greater than one', function() {
		for(var i = 0; i < 1000; i++) {
			expect(gameFunctions.generateComputerName().length).to.be.greaterThan(1);
		}
	});
});