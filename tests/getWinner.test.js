'use strict';
var expect = require('chai').expect;
var gameFunctions = require('../scripts/gameFunctions.js');

describe('makeMove', function() {
	var xGameBoard1 = [
		['X', 'X', 'X'],
		[' ', ' ', ' '],
		[' ', ' ', ' ']
	];
	var xGameBoard2 = [
		[' ', ' ', ' '],
		['X', 'X', 'X'],
		[' ', ' ', ' ']
	];
	var xGameBoard3 = [
		[' ', ' ', ' '],
		[' ', ' ', ' '],
		['X', 'X', 'X']
	];
	var xGameBoard4 = [
		['X', ' ', ' '],
		['X', ' ', ' '],
		['X', ' ', ' ']
	];
	var xGameBoard5 = [
		[' ', 'X', ' '],
		[' ', 'X', ' '],
		[' ', 'X', ' ']
	];
	var xGameBoard6 = [
		[' ', ' ', 'X'],
		[' ', ' ', 'X'],
		[' ', ' ', 'X']
	];
	var xGameBoard7 = [
		['X', ' ', ' '],
		[' ', 'X', ' '],
		[' ', ' ', 'X']
	];
	var xGameBoard8 = [
		[' ', ' ', 'X'],
		[' ', 'X', ' '],
		['X', ' ', ' ']
	];
	var oGameBoard1 = [
		['O', 'O', 'O'],
		[' ', ' ', ' '],
		[' ', ' ', ' ']
	];
	var oGameBoard2 = [
		[' ', ' ', ' '],
		['O', 'O', 'O'],
		[' ', ' ', ' ']
	];
	var oGameBoard3 = [
		[' ', ' ', ' '],
		[' ', ' ', ' '],
		['O', 'O', 'O']
	];
	var oGameBoard4 = [
		['O', ' ', ' '],
		['O', ' ', ' '],
		['O', ' ', ' ']
	];
	var oGameBoard5 = [
		[' ', 'O', ' '],
		[' ', 'O', ' '],
		[' ', 'O', ' ']
	];
	var oGameBoard6 = [
		[' ', ' ', 'O'],
		[' ', ' ', 'O'],
		[' ', ' ', 'O']
	];
	var oGameBoard7 = [
		['O', ' ', ' '],
		[' ', 'O', ' '],
		[' ', ' ', 'O']
	];
	var oGameBoard8 = [
		[' ', ' ', 'O'],
		[' ', 'O', ' '],
		['O', ' ', ' ']
	];
	var gameBoard1 = [
		[' ', ' ', 'O'],
		[' ', 'X', ' '],
		['X', 'O', ' ']
	];
	var gameBoard2 = [
		['O', 'X', 'O'],
		[' ', 'X', ' '],
		['X', 'O', ' ']
	];
	it('should exist', function() {
		expect(gameFunctions.getWinner).not.to.be.undefined;
	});
	it('should return X when xGameBoard1 is passed in', function() {
		expect(gameFunctions.getWinner(xGameBoard1)).to.equal('X');
	});
	it('should return X when xGameBoard2 is passed in', function() {
		expect(gameFunctions.getWinner(xGameBoard2)).to.equal('X');
	});
	it('should return X when xGameBoard3 is passed in', function() {
		expect(gameFunctions.getWinner(xGameBoard3)).to.equal('X');
	});
	it('should return X when xGameBoard4 is passed in', function() {
		expect(gameFunctions.getWinner(xGameBoard4)).to.equal('X');
	});
	it('should return X when xGameBoard5 is passed in', function() {
		expect(gameFunctions.getWinner(xGameBoard5)).to.equal('X');
	});
	it('should return X when xGameBoard6 is passed in', function() {
		expect(gameFunctions.getWinner(xGameBoard6)).to.equal('X');
	});
	it('should return X when xGameBoard7 is passed in', function() {
		expect(gameFunctions.getWinner(xGameBoard7)).to.equal('X');
	});
	it('should return X when xGameBoard8 is passed in', function() {
		expect(gameFunctions.getWinner(xGameBoard8)).to.equal('X');
	});
	it('should return O when oGameBoard1 is passed in', function() {
		expect(gameFunctions.getWinner(oGameBoard1)).to.equal('O');
	});
	it('should return O when oGameBoard2 is passed in', function() {
		expect(gameFunctions.getWinner(oGameBoard2)).to.equal('O');
	});
	it('should return O when oGameBoard3 is passed in', function() {
		expect(gameFunctions.getWinner(oGameBoard3)).to.equal('O');
	});
	it('should return O when oGameBoard4 is passed in', function() {
		expect(gameFunctions.getWinner(oGameBoard4)).to.equal('O');
	});
	it('should return O when oGameBoard5 is passed in', function() {
		expect(gameFunctions.getWinner(oGameBoard5)).to.equal('O');
	});
	it('should return O when oGameBoard6 is passed in', function() {
		expect(gameFunctions.getWinner(oGameBoard6)).to.equal('O');
	});
	it('should return O when oGameBoard7 is passed in', function() {
		expect(gameFunctions.getWinner(oGameBoard7)).to.equal('O');
	});
	it('should return O when oGameBoard8 is passed in', function() {
		expect(gameFunctions.getWinner(oGameBoard8)).to.equal('O');
	});
	it('should return null when gameBoard1 is passed in', function() {
		expect(gameFunctions.getWinner(gameBoard1)).to.be.null;
	});
	it('should return O when gameBoard2 is passed in', function() {
		expect(gameFunctions.getWinner(gameBoard2)).to.be.null;
	});
});