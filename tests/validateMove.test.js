'use strict';
var expect = require('chai').expect;
var gameFunctions = require('../scripts/gameFunctions.js');

describe('validateMove', function() {
	var gameBoard1 = [
		[' ', 'X', ' '],
		[' ', ' ', ' '],
		[' ', ' ', ' ']
	];
	var gameBoard2 = [
		[' ', 'X', ' '],
		['O', 'X', ' '],
		[' ', 'O', ' ']
	];
	it('should exist', function() {
		expect(gameFunctions.validateMove).not.to.be.undefined;
	});
	it('should throw an error if the coordinates are outside of the game board', function() {
		expect(function() { gameFunctions.validateMove({x: -1, y: 1}, gameBoard1); }).to.throw('Invalid move: the coordinates are outside the game board');
		expect(function() { gameFunctions.validateMove({x: 2, y: 10}, gameBoard1); }).to.throw('Invalid move: the coordinates are outside the game board');
		expect(function() { gameFunctions.validateMove({x: 3, y: 3}, gameBoard1); }).to.throw('Invalid move: the coordinates are outside the game board');
		expect(function() { gameFunctions.validateMove({x: 1, y: -3}, gameBoard1); }).to.throw('Invalid move: the coordinates are outside the game board');
	});
	it('should throw an error if the spot is already taken', function() {
		expect(function() { gameFunctions.validateMove({x: 1, y: 0}, gameBoard1); }).to.throw('Invalid move: that spot is already taken');
		expect(function() { gameFunctions.validateMove({x: 1, y: 0}, gameBoard2); }).to.throw('Invalid move: that spot is already taken');
		expect(function() { gameFunctions.validateMove({x: 0, y: 1}, gameBoard2); }).to.throw('Invalid move: that spot is already taken');
		expect(function() { gameFunctions.validateMove({x: 1, y: 1}, gameBoard2); }).to.throw('Invalid move: that spot is already taken');
		expect(function() { gameFunctions.validateMove({x: 1, y: 2}, gameBoard2); }).to.throw('Invalid move: that spot is already taken');
	});
	it('should return true if it is a valid move', function() {
		expect(gameFunctions.validateMove({x: 0, y: 0}, gameBoard1)).to.deep.equal({x: 0, y: 0});
		expect(gameBoard1[0][0]).to.equal(' ');
		expect(gameFunctions.validateMove({x: 0, y: 0}, gameBoard2)).to.deep.equal({x: 0, y: 0});
		expect(gameBoard2[0][0]).to.equal(' ');
		expect(gameFunctions.validateMove({x: 2, y: 2}, gameBoard2)).to.deep.equal({x: 2, y: 2});
		expect(gameBoard2[2][2]).to.equal(' ');
	});
});