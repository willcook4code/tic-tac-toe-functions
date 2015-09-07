'use strict';
var gameFunctions = require('./gameFunctions.js');
var prompt = require('prompt-sync').prompt;
var players = null;
var gameType = null;
var currentPlayer = null;
var shouldContinue = false;
var winner = false;
var gameBoard = null;
var move = null;

do {
	players ={
		X: null,
		O: null
	};
	gameBoard = [
		[' ', ' ', ' '],
		[' ', ' ', ' '],
		[' ', ' ', ' ']
	];
	winner = false;

	/*
	 * Choose the type of game (one or two player)
	 */
	do {
		console.log('What type of game would you like to play? Type 1 for one player and 2 for two player.');
		gameType = gameFunctions.validateGameType(prompt());
	} while(!gameType);

	/*
	 * Get the player names
	 */
	if(gameType === 1) {
		do {
			console.log('What is your name?');
			players.X = gameFunctions.validateName(prompt());
		} while(!players.X);
		players.O = gameFunctions.generateComputerName();
	}
	else {
		do {
			console.log('What is player one\'s name?');
			players.X = gameFunctions.validateName(prompt());
		} while(!players.X);

		do {
			console.log('What is player two\'s name?');
			players.O = gameFunctions.validateName(prompt());
		} while(!players.O);
	}

	/*
	 * Choose who will go first
	 */
	currentPlayer = Math.random() > 0.5 ? 'X' : 'O';
	console.log(players[currentPlayer]+' will go first...');

	do {
		do {
			console.log(gameFunctions.getGameBoardString(gameBoard));
			console.log(players[currentPlayer]+', where would you like to move?');
			move = false;
			try {
				if(gameType === 1 && currentPlayer === 'O') {
					move = gameFunctions.getComputerPlayerMove(currentPlayer, gameBoard);
					console.log(move.x+' '+move.y);
				}
				else {
					move = gameFunctions.parseMove(prompt());
				}

				try {
					move = gameFunctions.validateMove(move, gameBoard);
				}
				catch(e) {
					move = false;
					console.log(e);
				}
			}
			catch(e) {
				console.log(e);
			}
		} while(!move);

		gameBoard = gameFunctions.makeMove(currentPlayer, move, gameBoard);
		winner = gameFunctions.getWinner(gameBoard);

		currentPlayer = gameFunctions.getNextPlayer(currentPlayer);

	} while(!winner && gameFunctions.getEmptySpaceCount(gameBoard) > 0);

	console.log(gameFunctions.getGameBoardString(gameBoard));
	console.log('Congratulations!!! '+players[winner]+' is the winner!!!');

	do {
		console.log('Would you like to play again? Yes or No?');
		shouldContinue = gameFunctions.validateYesNo(prompt());
	} while(shouldContinue === null);

} while(shouldContinue);