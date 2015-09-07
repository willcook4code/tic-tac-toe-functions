'use strict';
var expect = require('chai').expect;
var gameFunctions = require('../scripts/gameFunctions.js');

describe('getEmptySpaceCount', function() {
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
	var gameBoard3 = [
		[' ', 'X', ' ', ' '],
		['O', 'X', ' ', ' '],
		[' ', 'O', ' ', ' ']
	];
	it('should exist', function() {
		expect(gameFunctions.getEmptySpaceCount).not.to.be.undefined;
	});
	it('should correctly count the number of empty spaces on game board 1', function() {
		expect(gameFunctions.getEmptySpaceCount(gameBoard1)).to.equal(8);
	});
	it('should correctly count the number of empty spaces on game board 2', function() {
		expect(gameFunctions.getEmptySpaceCount(gameBoard2)).to.equal(5);
	});
	it('should correctly count the number of empty spaces on game board 3', function() {
		expect(gameFunctions.getEmptySpaceCount(gameBoard3)).to.equal(8);
	});
});