'use strict';
var expect = require('chai').expect;
var gameFunctions = require('../scripts/gameFunctions.js');

describe('makeMove', function() {
	var gameBoard1 = [
		[' ', 'X', ' '],
		[' ', ' ', ' '],
		[' ', ' ', ' ']
	];
	it('should exist', function() {
		expect(gameFunctions.makeMove).not.to.be.undefined;
	});
	it('should update the game board appropriately when the player is X', function() {
		var newGameBoard = gameFunctions.makeMove('X', {x: 0, y: 0}, gameBoard1);
		expect(newGameBoard[0][0]).to.equal('X');
	});
	it('should update the game board appropriately when the player is O', function() {
		var newGameBoard = gameFunctions.makeMove('O', {x: 2, y: 0}, gameBoard1);
		expect(newGameBoard[0][2]).to.equal('O');
	});
});