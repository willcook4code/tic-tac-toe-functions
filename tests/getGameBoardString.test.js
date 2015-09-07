'use strict';
var expect = require('chai').expect;
var gameFunctions = require('../scripts/gameFunctions.js');

describe('getGameBoardString', function() {
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
		expect(gameFunctions.getGameBoardString).not.to.be.undefined;
	});
	it('should return a string', function() {
		expect(typeof gameFunctions.getGameBoardString(gameBoard1)).to.be.equal('string');
		expect(typeof gameFunctions.getGameBoardString(gameBoard2)).to.be.equal('string');
	});
	it('should return a string that displays the first game board', function() {
		expect(gameFunctions.getGameBoardString(gameBoard1)).to.equal('     1   2   3 \n  ~~~~~~~~~~~~~\n1 |   | X |   |\n  ~~~~~~~~~~~~~\n2 |   |   |   |\n  ~~~~~~~~~~~~~\n3 |   |   |   |\n  ~~~~~~~~~~~~~\n');
	});
	it('should return a string that displays the second game board', function() {
		expect(gameFunctions.getGameBoardString(gameBoard2)).to.equal('     1   2   3 \n  ~~~~~~~~~~~~~\n1 |   | X |   |\n  ~~~~~~~~~~~~~\n2 | O | X |   |\n  ~~~~~~~~~~~~~\n3 |   | O |   |\n  ~~~~~~~~~~~~~\n');
	});
});