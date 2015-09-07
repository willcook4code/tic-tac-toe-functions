'use strict';
/*
 * Returns the number 1 if the gameTypeString is 1 player and the number 2 if
 * the gameTypeString is 2 players. If the gameTypeString is invalid it should
 * return false.
 *
 * valid options include: '1', 'one', '2', or 'two'.
 * The function should be case insensitive, so 'one' and 'ONE' should both
 * result in true.
 */
function validateGameType(gameTypeString) {
	if(typeof gameTypeString !== 'string') {
		return false;
	}
	gameTypeString = gameTypeString.toLowerCase();
	switch(gameTypeString) {
		case '1':
		case 'one':
			return 1;
		case '2':
		case 'two':
			return 2;
	}
	return false;
}

/*
 * Returns the players name if it is a valid name. Valid names must only contain
 * letters, hyphens or spaces and must contain at least one letter. Returns
 * false if the name is not valid.
 */
function validateName(name) {
	if(typeof name !== 'string') {
		return false;
	}
	if(name.length === 0) {
		return false;
	}
	return name;
}

/*
 * Randomly generates and returns a name for a computer player.
 */
function generateComputerName() {
	var names = [
		'Andrew',
		'Bubbles',
		'Crown',
		'Devin',
		'Elephant',
		'Francis',
		'Galdiator'
	];

	return names[Math.floor(Math.random()*7)];
}

/*
 * Converts the moveString (which should be in the formate 'x y') into an object
 * with x and y properties as numbers. The x and y properties in the object
 * should be numbers that correspond to positions in the gameBoard matrix.
 *
 * For example:
 * If the moveString was '2 3' then the return value should be:
 * {
 *	  x: 1,
 *	  y: 2
 * }
 *
 * Notice that the values in the return object are one less than the inpute
 * values. This is because the gameBoard is zero-indexed (meaning it starts at
 * position 0 instead of position 1 so every position is one smaller than the
 * values in the moveString).
 *
 * If the moveString is not in the correct format (ie. 'x y') then the function
 * should throw an 'Invalid input: the move must be in the format "x y"'
 * exception.
 */
function parseMove(moveString) {
	var error = 'Invalid input: the move must be in the format "x y"';
	if(typeof moveString !== 'string') {
		throw error;
	}

	var pieces = moveString.split(' ');
	if(pieces.length !== 2) {
		throw error;
	}

	var moveObject = {
		x: parseInt(pieces[0]),
		y: parseInt(pieces[1])
	};

	if(isNaN(moveObject.x) || isNaN(moveObject.y)) {
		throw error;
	}

	moveObject.x -= 1;
	moveObject.y -= 1;

	return moveObject;
}

/*
 * Validate the moveObject.
 *
 * If the x and y coordinates in the moveObject are outside the game board (ie.
 * they are greater than 2 or less than 0) then the function should throw an
 * 'Invalid move: the coordinates are outside the game board' exception.
 *
 * If the position on the gameBoard associated with the x and y coordinates is
 * already taken (ie. the associated position on the game board is *not* and
 * single space) then the function should throw an 'Invalid move: that spot is
 * already taken' exception.
 *
 * If there are no errors then the function should return the move object.
 */
function validateMove(moveObject, gameBoard) {
	var outside = moveObject.x < 0 || moveObject.x > 2 || moveObject.y < 0 ||
					moveObject.y > 2;
	if(outside) {
		throw 'Invalid move: the coordinates are outside the game board';
	}

	if(gameBoard[moveObject.y][moveObject.x] !== ' ') {
		throw 'Invalid move: that spot is already taken';
	}

	return moveObject;
}

/*
 * Convert the gameBoard matrix to a string. You can use \n to denote a newline
 * within a string. For a matrix like this:
 * gameBoard = [
 *     [' ', 'X', ' '],
 *     [' ', ' ', ' '],
 *     [' ', ' ', ' '],
 * ]
 * the resulting string should look like this:
 *      1   2   3
 *   ~~~~~~~~~~~~~
 * 1 |   | X |   |
 *   ~~~~~~~~~~~~~
 * 2 |   |   |   |
 *   ~~~~~~~~~~~~~
 * 3 |   |   |   |
 *   ~~~~~~~~~~~~~
 */
function getGameBoardString(gameBoard) {
	var string = '';
	string += '     1   2   3 \n';
	string += '  ~~~~~~~~~~~~~\n';
	for(var y = 0; y < gameBoard.length; y++) {
		string += (y+1)+' | '+gameBoard[y].join(' | ')+' |\n';
		string += '  ~~~~~~~~~~~~~\n';
	}
	return string;
}

/*
 * Given a playerString (either 'X' or 'O'), a moveObject and a gameBoard
 * matrix, make the move on the gameBoard and return the gameBoard.
 */
function makeMove(playerString, moveObject, gameBoard) {
	gameBoard[moveObject.y][moveObject.x] = playerString;
	return gameBoard;
}

/*
 * Return the number of empty spaces that currently exist within the gameBoard
 * matrix. This function should work regardless of the size of the game board.
 * For example, the game board might be 3x3, 4x4, or 5x7.
 */
function getEmptySpaceCount(gameBoard) {
	var count = 0;
	for(var y = 0; y < gameBoard.length; y++) {
		for(var x = 0; x < gameBoard[y].length; x++) {
			if(gameBoard[y][x] === ' ') {
				count++;
			}
		}
	}
	return count;
}

/*
 * Return the player (either 'X' or 'O') who should go next, based on the
 * current player. If the currentPlayer is 'X' then the function should return
 * 'O' and vice versa.
 */
function getNextPlayer(currentPlayer) {
	return (currentPlayer.toUpperCase() === 'X') ? 'O' : 'X';
}

/*
 * Determine and return the winning player (either 'X' or 'O') based on the
 * gameBoard matrix. If there is no winner than the function should return null.
 */
function getWinner(gameBoard) {
	var xWin = false;
	var oWin = false;
	for(var y = 0; y < gameBoard.length; y++) {
		if(gameBoard[y].join('') === 'XXX') {
			return 'X';
		}
		else if(gameBoard[y].join('') === 'OOO') {
			return 'O';
		}
	}

	for(var x = 0; x < gameBoard.length; x++) {
		xWin = gameBoard[0][x] === 'X' && gameBoard[1][x] === 'X' &&
				gameBoard[2][x] === 'X';
		if(xWin) {
			return 'X';
		}

		oWin = gameBoard[0][x] === 'O' && gameBoard[1][x] === 'O' &&
				gameBoard[2][x] === 'O';
		if(oWin) {
			return 'O';
		}
	}

	xWin = gameBoard[0][0] === 'X' && gameBoard[1][1] === 'X' &&
			gameBoard[2][2] === 'X';
	if(xWin) {
		return 'X';
	}

	oWin = gameBoard[0][0] === 'O' && gameBoard[1][1] === 'O' &&
			gameBoard[2][2] === 'O';
	if(oWin) {
		return 'O';
	}

	xWin = gameBoard[2][0] === 'X' && gameBoard[1][1] === 'X' &&
			gameBoard[0][2] === 'X';
	if(xWin) {
		return 'X';
	}

	oWin = gameBoard[2][0] === 'O' && gameBoard[1][1] === 'O' &&
			gameBoard[0][2] === 'O';
	if(oWin) {
		return 'O';
	}

	return null;
}

/*
 * Validate a yes/no answer. If the yesNoString is 'y' or 'yes' then the
 * function should return true. If the yesNoString is 'n' or 'no' then the
 * function should return false. If the yesNoString is neither of those options
 * then the function should return null. The function should be case
 * insensitive, so it should accept both 'Y' and 'y' for example.
 */
function validateYesNo(yesNoString) {
	yesNoString = yesNoString.toLowerCase();
	if(yesNoString === 'y' || yesNoString === 'yes') {
		return true;
	}
	if(yesNoString === 'n' || yesNoString === 'no') {
		return false;
	}
	return null;
}

/*
 * Receives a player (either 'X' or 'O') and a game board. Returns the best move
 * for the chosen player based on the following algorithm:
 *
 * Choose the first available move:
 * 1. Win: If the player has two in a row, they can place a third to get three
 *    in a row.
 * 2. Block: If the opponent has two in a row, the player must play the third
 *    themselves to block the opponent.
 * 3. Fork: Create an opportunity where the player has two threats to win (two
 *    non-blocked lines of 2).
 * 4. Blocking an opponent's fork:
 *       Option 1: The player should create two in a row to force the opponent
 *                 into defending, as long as it doesn't result in them creating
 *                 a fork. For example, if "X" has a corner, "O" has the center,
 *                 and "X" has the opposite corner as well, "O" must not play a
 *                 corner in order to win. (Playing a corner in this scenario
 *                 creates a fork for "X" to win.)
 *       Option 2: If there is a configuration where the opponent can fork, the
 *                 player should block that fork.
 * 7. Center: A player marks the center. (If it is the first move of the game,
 *    playing on a corner gives "O" more opportunities to make a mistake and may
 *    therefore be the better choice; however, it makes no difference between
 *    perfect players.)
 * 8. Opposite corner: If the opponent is in the corner, the player plays the
 *    opposite corner.
 * 9. Empty corner: The player plays in a corner square.
 * 10 Empty side: The player plays in a middle square on any of the 4 sides.
 *
 * This strategy taken from wikipedia:
 * https://en.wikipedia.org/wiki/Tic-tac-toe#Strategy
 *
 * You may want to break this function up into more tha one other functions.
 * Perhaps one for each type of moves a player could make.
 *
 * The move should be returned as a move object with x and y properties. For
 * example: { x: 0, y: 0 }.
 */
function getComputerPlayerMove(player, gameBoard) {
	// This code just moves to the next available space instead of using the
	// algorithm outlined above.
	for(var y = 0; y < gameBoard.length; y++) {
		for(var x = 0; x < gameBoard[y].length; x++) {
			if(gameBoard[y][x] === ' ') {
				return {x: x, y: y};
			}
		}
	}
	return null;
}

/*
 * Don't mess with this code :)
 */
module.exports = {
	validateGameType: validateGameType,
	validateName: validateName,
	generateComputerName: generateComputerName,
	parseMove: parseMove,
	validateMove: validateMove,
	getGameBoardString: getGameBoardString,
	makeMove: makeMove,
	getEmptySpaceCount: getEmptySpaceCount,
	getNextPlayer: getNextPlayer,
	getWinner: getWinner,
	validateYesNo: validateYesNo,
	getComputerPlayerMove: getComputerPlayerMove
};