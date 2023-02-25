"use strict";
class Board {
    constructor(board) {
        this.board = board;
        this.boardLength = 8;
        this.boardLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        this.createBoard();
    }
    createBoard() {
        var _a;
        let isBlack = false;
        for (let i = 0; i < Math.pow(this.boardLength, 2); i++) {
            const cellColor = isBlack ? 'black_cell' : 'white_cell';
            const boardCell = document.createElement('div');
            const column = this.boardLetters[i % 8];
            const line = Math.floor(i / this.boardLength) + 1;
            boardCell.classList.add('board_cell', cellColor);
            boardCell.setAttribute('data-title', `${column} ${line}`);
            (_a = this.board) === null || _a === void 0 ? void 0 : _a.appendChild(boardCell);
            if ((i % this.boardLength) - (this.boardLength - 1) !== 0)
                isBlack = !isBlack;
        }
    }
}
const board = new Board(document.querySelector('#board'));
//# sourceMappingURL=index.js.map