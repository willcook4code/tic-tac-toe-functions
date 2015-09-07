'use strict';
var expect = require('chai').expect;
var gameFunctions = require('../scripts/gameFunctions.js');

describe('getNextPlayer', function() {
	it('should exist', function() {
		expect(gameFunctions.getNextPlayer).not.to.be.undefined;
	});
	it('should return O if X is passed in', function() {
		expect(gameFunctions.getNextPlayer('X')).to.equal('O');
	});
	it('should return X if O is passed in', function() {
		expect(gameFunctions.getNextPlayer('O')).to.equal('X');
	});
});