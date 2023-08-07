const initialGame = {
    'a8': 'black_rook',
    'b8': 'black_knight',
    'c8': 'black_bishop',
    'd8': 'black_queen',
    'e8': 'black_king',
    'f8': 'black_bishop',
    'g8': 'black_knight',
    'h8': 'black_rook',
    'a7': 'black_pawn',
    'b7': 'black_pawn',
    'c7': 'black_pawn',
    'd7': 'black_pawn',
    'e7': 'black_pawn',
    'f7': 'black_pawn',
    'g7': 'black_pawn',
    'h7': 'black_pawn',
    
    'a1': 'white_rook',
    'b1': 'white_knight',
    'c1': 'white_bishop',
    'd1': 'white_queen',
    'e1': 'white_king',
    'f1': 'white_bishop',
    'g1': 'white_knight',
    'h1': 'white_rook',
    'a2': 'white_pawn',
    'b2': 'white_pawn',
    'c2': 'white_pawn',
    'd2': 'white_pawn',
    'e2': 'white_pawn',
    'f2': 'white_pawn',
    'g2': 'white_pawn',
    'h2': 'white_pawn',
}

function drawPieces () {
    Object.keys(game).forEach(key => {
        const t = document.getElementById(key)
        // console.log(key)
        const image = document.createElement('img')
        image.classList.add("tileImage")
        image.src = `img/${game[key]}.png`
        // image.style.width = '50px'
        t.appendChild(image)
        
    })
}

function pieceColor (position) {
    if (tileContainsPiece(position) && game[position].includes('black')) {
       return 'black'
    }
    else if (tileContainsPiece(position) && game[position].includes('white')) {
        return 'white'
    }
    return false
}

function tileContainsPiece (position) {
    // const tile = document.getElementById(position)
    // //console.log(tile.childElementCount)
    // const possibleImg = tile.getElementsByClassName('tileImage')
    // //console.log(possibleImg)
    // if (possibleImg.length > 0) {
    //     return true
    // }
    // return false

    return position in game
}

var positionSelected = ''
var possibilities = []


function mouseMovement (event, cPosition) {
    // console.log(event.type)
    if (event.type == "mouseover" && pieceColor(cPosition) == player) {
        // console.log('here')
        const t = document.getElementById(cPosition)
        t.classList.add("on")
    }
    if (event.type == "mouseout" && pieceColor(cPosition) == player) {
        const t = document.getElementById(cPosition)
        t.classList.remove("on")
    }
}

function userInput (move, cPosition) {
    
    if (move == 'selectPiece') {   //selecting or deselecting an item
        positionSelected = positionSelected == '' ? cPosition : ''
        const t = document.getElementById(cPosition)
        t.classList.toggle("selected")
        possibilities = getMoves(cPosition)
        toggleAvailable(possibilities)

        if (positionSelected == '') {
            possibilities = []
        }
        //the possibilites are being kept
    }
    else if (move == 'movePiece') {
        const t = document.getElementById(positionSelected)
        t.classList.toggle("selected")
        possibilities = getMoves(positionSelected)
        toggleAvailable(possibilities)
        movePiece(positionSelected, cPosition)

        positionSelected = ''
    }
    console.log(positionSelected)

}

function selectingPiece (cPosition, vMoves) {
    positionSelected = positionSelected == '' ? cPosition : ''
    const t = document.getElementById(cPosition)
    t.classList.toggle("selected")
    possibilities = vMoves
    toggleAvailable(possibilities)

    if (positionSelected == '') {
        possibilities = []
    }
}

function movingPiece (cPosition, vMoves) {
    const t = document.getElementById(positionSelected)
    t.classList.toggle("selected")
    possibilities = vMoves
    toggleAvailable(possibilities)
    movePiece(positionSelected, cPosition)

    positionSelected = ''
}

function addListeners() {
    const tiles = Array.from(document.getElementsByClassName('tile'))
    tiles.forEach(elem => {
        //console.log(t)
        elem.addEventListener("mouseover", () => {
            mouseMovement (event,elem.id)
        });

        elem.addEventListener("mouseout", () => {
            mouseMovement (event,elem.id)
        });

        elem.addEventListener("click", () => {
            runGame (elem.id)
        })
    })
}

function removeListeners() {
    const tiles = Array.from(document.getElementsByClassName('tile'))
    tiles.forEach(elem => {
        //console.log(t)
        elem.removeEventListener("mouseover", () => {
            mouseMovement (event, elem.id)
        });

        elem.removeEventListener("mouseout", () => {
            mouseMovement (event, elem.id)
        });

        elem.removeEventListener("click", () => {
            runGame (elem.id)
        })
    })
}



function addTiles() {
    const tiles = document.getElementsByClassName('tile')
    Array.from(tiles).forEach(element => {
        const tile = document.createElement('div')
        tile.classList.add('tileNumber')
        tile.innerHTML = element.id
        //console.log(element.id)
        element.appendChild(tile)
    });
}

function startGame() {
    game = {...initialGame};
    addTiles()
    addListeners()
}

var player = 'white' 

function runGame(cPosition) {

    if (player == 'black') {
        moveAI(player)
        // positionSelected = ''
        changeTurn()
        return
    }

    const vMoves = viableMoves(player)
    

    
    if (positionSelected == '' && pieceColor(cPosition) == player || positionSelected == cPosition) {
        selectingPiece(cPosition, vMoves[cPosition])
    }
    else if (positionSelected != '') {
        if (vMoves[positionSelected].includes(cPosition)) {
            movingPiece(cPosition, vMoves[positionSelected])
            const opponent = player == 'white' ? 'black' : 'white'
            // if (checkMate(opponent)) {
            //     removeListeners()
            //     showWinner(player)
            // }
            changeTurn()
            runGame()
        }
        
    }
   
}

function showWinner(player) {
    console.log(`${player} has won`)
}

var game = {};

startGame()
drawPieces()
//runGame()



//window.addEventListener('mouseover', userInput);