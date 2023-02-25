type Html = HTMLElement | null

class Board {
    board: Html
    boardLength: number
    boardLetters: string[]

    constructor(board: Html) {
        this.board = board
        this.boardLength = 8
        this.boardLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
        this.createBoard()
    }

    createBoard() {
        let isBlack: boolean = false

        for (let i = 0; i < Math.pow(this.boardLength, 2); i++) {
            const cellColor: string = isBlack ? 'black_cell' : 'white_cell'
            const boardCell: Html = document.createElement('div')
            const column = this.boardLetters[i % 8]
            const line = Math.floor(i / this.boardLength) + 1

            boardCell.classList.add('board_cell', cellColor)
            boardCell.setAttribute('data-title', `${column} ${line}`)

            this.board?.appendChild(boardCell)

            if ((i % this.boardLength) - (this.boardLength - 1) !== 0) isBlack = !isBlack
        }
    }
}

const board = new Board(document.querySelector('#board'))
