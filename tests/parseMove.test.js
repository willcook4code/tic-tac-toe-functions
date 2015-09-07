'use strict';
var expect = require('chai').expect;
var gameFunctions = require('../scripts/gameFunctions.js');

describe('parseMove', function() {
	it('should exist', function() {
		expect(gameFunctions.parseMove).not.to.be.undefined;
	});
	it('should throw an error if no input is specified', function() {
		expect(function() { gameFunctions.parseMove(); }).to.throw('Invalid input: the move must be in the format "x y"');
	});
	it('should throw an error if number input is specified', function() {
		expect(function() { gameFunctions.parseMove(5); }).to.throw('Invalid input: the move must be in the format "x y"');
	});
	it('should throw an error if array input is specified', function() {
		expect(function() { gameFunctions.parseMove(['a', 'b', 'c']); }).to.throw('Invalid input: the move must be in the format "x y"');
	});
	it('should throw an error if object input is specified', function() {
		expect(function() { gameFunctions.parseMove({x: 7, y: 3}); }).to.throw('Invalid input: the move must be in the format "x y"');
	});
	it('should throw an error if only one number is specified', function() {
		expect(function() { gameFunctions.parseMove('2'); }).to.throw('Invalid input: the move must be in the format "x y"');
	});
	it('should throw an error if a letter is specified', function() {
		expect(function() { gameFunctions.parseMove('a'); }).to.throw('Invalid input: the move must be in the format "x y"');
	});
	it('should throw an error if a number and a letter are specified', function() {
		expect(function() { gameFunctions.parseMove('1 a'); }).to.throw('Invalid input: the move must be in the format "x y"');
	});
	it('should throw an error if a letter and a number are specified', function() {
		expect(function() { gameFunctions.parseMove('a 1'); }).to.throw('Invalid input: the move must be in the format "x y"');
	});
	it('should throw an error if two letters are specified', function() {
		expect(function() { gameFunctions.parseMove('a b'); }).to.throw('Invalid input: the move must be in the format "x y"');
	});
	it('should throw an error if three numbers are specified', function() {
		expect(function() { gameFunctions.parseMove('1 2 3'); }).to.throw('Invalid input: the move must be in the format "x y"');
	});
	it('should throw an error if there are no spaces in the input', function() {
		expect(function() { gameFunctions.parseMove('1-2'); }).to.throw('Invalid input: the move must be in the format "x y"');
	});
	it('should work if two numbers are specified', function() {
		var moveObject = gameFunctions.parseMove('1 2');
		expect(moveObject.x).to.equal(0);
		expect(moveObject.y).to.equal(1);

		moveObject = gameFunctions.parseMove('3 2');
		expect(moveObject.x).to.equal(2);
		expect(moveObject.y).to.equal(1);

		moveObject = gameFunctions.parseMove('1 1');
		expect(moveObject.x).to.equal(0);
		expect(moveObject.y).to.equal(0);
	});
});