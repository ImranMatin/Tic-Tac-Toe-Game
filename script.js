let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function makeMove(cellIndex) {
    if (gameActive && board[cellIndex] === '') {
        board[cellIndex] = currentPlayer;
        document.getElementById('board').children[cellIndex].textContent = currentPlayer;

        if (checkWin(currentPlayer)) {
            document.getElementById('status').textContent = '';
            showWinPopup(`Player ${currentPlayer} wins!`);
            gameActive = false;
        } else if (board.indexOf('') === -1) {
            document.getElementById('status').textContent = '';
            showWinPopup("It's a draw!");
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('status').textContent = `Player ${currentPlayer}'s turn`;
        }
    }
}

function checkWin(player) {
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] === player && board[b] === player && board[c] === player) {
            return true;
        }
    }
    return false;
}

function showWinPopup(message) {
    document.getElementById('winMessage').textContent = message;
    document.getElementById('winPopup').style.display = 'block';
}

function closePopup() {
    document.getElementById('winPopup').style.display = 'none';
}

function newGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;

    // Clear the board
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.textContent = '');

    // Hide the win popup
    closePopup();

    // Reset status message
    document.getElementById('status').textContent = "Player X's turn";
}

