import type { HTML, figure } from './interfaces'

class Figure {
    position: { line: number; column: number }
    colour: string
    type: string
    id: string
    figurePlacement: HTML
    figure: HTML
    moves: string[]
    isPicked: boolean

    constructor({ position, type, id }: figure) {
        this.position = position
        this.colour = type.split('_')[1] === 'b' ? 'black' : 'white'
        this.type = type
        this.id = id.toString()
        this.figurePlacement = null
        this.figure = null
        this.isPicked = false
        this.moves = []
    }

    createFigure() {
        this.figure = document.createElement('div')
        this.figure.setAttribute('data-title', this.type)
        this.figure.setAttribute('data-colour', this.colour)
        this.figure.setAttribute('data-id', this.id)
        this.figure.classList.add('figure')
        this.figure.style.backgroundImage = `url(images/${this.type}.png)`

        return this.figure
    }
}

export { Figure }
