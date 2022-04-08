let board = [];


const runTicTacToe = () => {

    // Ask the first player where they would like to place the X
    
    // Show the Board 

    // check if game ended 
    
    // repeat for second player

    // repeat rounds until game ends

    // ask if they would like to play again repeat game if yes, exit if no
    
}

// Get player input for their turn
const getPlayerTurnInput = () => {
    // Place code here
}

// check if the game as ended
const didGameEnd = () => {
  // Place code here

}

// print the TicTacToe board
const printBoard = () => {
    console.log(`------------------`);
    let nextLine;
    for (let row = 0; row < 3; row++) {
        nextLine = '|';
        for (let column = 0; column < 3; column++) {
            nextLine += ` ${board[row][column]} |`;
        }
        console.log(nextLine);
        console.log(`------------------`);
    }
}

// initializes and resets the TicTacToe board
const initBoard = () => {
    board = [];
    for (let row = 0; row < 3; row++) {
        board.push([]);
        for (let column = 0; column < 3; column++) {
            board[row].push('');
        }
    }
}


runTicTacToe();