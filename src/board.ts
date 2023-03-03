import { Figure } from './figures.js'
import type { HTML, figure } from './interfaces'

export const boardCoordinate: string[][] = [
    ['r_b', 'b_b', 'k_b', 'Q_b', 'KG_b', 'k_b', 'b_b', 'r_b'],
    ['p_b', 'p_b', 'p_b', 'p_b', 'p_b', 'p_b', 'p_b', 'p_b'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['p_w', 'p_w', 'p_w', 'p_w', 'p_w', 'p_w', 'p_w', 'p_w'],
    ['r_w', 'b_w', 'k_w', 'Q_w', 'KG_w', 'k_w', 'b_w', 'r_w'],
]

class Board {
    board: HTML
    boardLetters: string[]
    figureID: number

    constructor() {
        this.board = document.querySelector('#board')
        this.boardLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
        this.figureID = 1
    }

    createBoard(): void {
        let isBlack: boolean = false

        for (let i = 0; i < Math.pow(this.boardLetters.length, 2); i++) {
            const cellColor: string = isBlack ? 'black_cell' : 'white_cell'
            const boardCell: HTML = document.createElement('div')
            const column = i % this.boardLetters.length
            const line = Math.floor(i / this.boardLetters.length)

            boardCell.classList.add('board_cell', cellColor)
            boardCell.setAttribute('data-title', `${this.boardLetters[column]}${line + 1}`)
            boardCell.setAttribute('data-column', column.toString())
            boardCell.setAttribute('data-line', line.toString())
            boardCell.addEventListener('click', () => this.getCoord(line, column))

            this.board?.appendChild(boardCell)
            this.addFigure(boardCell, line, column)

            if ((i % this.boardLetters.length) - (this.boardLetters.length - 1) !== 0) {
                isBlack = !isBlack
            }
        }
    }

    addFigure(cell: HTML, line: number, column: number) {
        if (!boardCoordinate[line][column]) return

        const figureData: figure = {
            position: { line, column },
            type: boardCoordinate[line][column],
            id: this.figureID,
        }

        cell?.appendChild(new Figure(figureData).createFigure())

        this.figureID++
    }

    getCoord(line: number, column: number): void {
        console.log(boardCoordinate[line][column])
    }
}

export default Board
