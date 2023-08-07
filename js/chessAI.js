const colorPieceDivider = 1000

const boardSize = 8

const pieceSquareTable = {
    kingArray: [
        [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0], 
        [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0], 
        [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0], 
        [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0], 
        [-2.0, -3.0, -3.0, -4.0, -4.0, -3.0, -3.0, -2.0], 
        [-1.0, -2.0, -2.0, -2.0, -2.0, -2.0, -2.0, -1.0],
        [2.0, 2.0, 0.0, 0.0, 0.0, 0.0, 2.0, 2.0 ],
        [2.0, 3.0, 1.0, 0.0, 0.0, 1.0, 3.0, 2.0 ]
    ],

    queenArray: [
        [-2.0, -1.0, -1.0, -0.5, -0.5, -1.0, -1.0, -2.0], 
        [-1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -1.0], 
        [-1.0, 0.0, 0.5, 0.5, 0.5, 0.5, 0.0, -1.0],
        [-0.5, 0.0, 0.5, 0.5, 0.5, 0.5, 0.0, -0.5], 
        [ 0.0, 0.0, 0.5, 0.5, 0.5, 0.5, 0.0, -0.5], 
        [-1.0, 0.5, 0.5, 0.5, 0.5, 0.5, 0.0, -1.0],
        [-1.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.0, -1.0], 
        [-2.0, -1.0, -1.0, -0.5, -0.5, -1.0, -1.0, -2.0]
    ],
    
    bishopArray: [
        [-2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0], 
        [-1.0, 0.0, 0.0, 0.0, 0.0, 0,0, 0.0 -1.0], 
        [-1.0, 0.0, 0.5, 1.0, 1.0, 0.5, 0.0, -1.0], 
        [-1.0, 0.5, 0.5, 1.0, 1.0, 0.5, 0.5, -1.0], 
        [-1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 4.0, -1.0], 
        [-1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0], 
        [ -1.0, 0.5, 0.0, 0.0, 0.0, 0.0, 0.5, -1.], 
        [-2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0]
    ],

    KnightArray: [
        [-5.0, -4.0, -3.0, -3.0, -3.0, -3.0, -4.0, -5.0],
        [-4.0, -2.0, 0.0, 0.0, 0.0, 0.0, -2.0, -4.0], 
        [-3.0, 0.0, 1.0, 1.5, 1.5, 1.0, 0.0, -3.0], 
        [-3.0, 0.5, 1.5, 2.0, 2.0, 1.5, 0.5, -3.0], 
        [-3.0, 0.0, 1.5, 2.0, 2.0, 1.5, 0.0, -3.0], 
        [-3.0, 0.5, 1.0, 1.5, 1.5, 1.0, 0.5, -3.0], 
        [-4.0, -2.0, 0.0, 0.5, 0.5, 0.0, -2.0, -4.0], 
        [-5.0, -4.0, -3.0, -3.0, 3.0, -3.0, -4.0, -5.0]
    ],

    PawnArray: [
        [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        [5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0],
        [1.0, 1.0, 2.0, 3.0, 3.0, 2.0, 1.0, 1.0],
        [0.5, 0.5, 1.0, 2.5, 2.5, 1.0, 0.5, 0.5], 
        [0.0, 0.0, 0.0, 2.0, 2.0, 0.0, 0.0, 0.0], 
        [0.5, -0.5, -1.0, 0.0, 0.0, -1.0, -0.5, 0.5], 
        [0.5, 1.0, 1.0, -2.0, -2.0, 1.0, 1.0, 0.5], 
        [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
    ],

    rookArray: [
        [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        [0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5],
        [-0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.5],
        [-0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.5],
        [-0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.5],
        [-0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.5],
        [-0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.5],
        [0.0, 0.0, 0.0, 0.5, 0.5, 0.0, 0.0, 0.0]
    ]

}

class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = []; 
        this.move = ''
    }

    add(child) {
       this.children.push(child) 
    }
}

function pieceValue(position) {
    
    const pieceType = game[position]
    var positionNumValue = 0

    if (pieceType.includes('pawn')) {
        positionNumValue = 10
    }
    else if (pieceType.includes('bishop') || pieceType.includes('knight')) {
        positionNumValue = 30
    }
    else if (pieceType.includes('rook')) {
        positionNumValue = 50
    }
    else if (pieceType.includes('queen')) {
        positionNumValue = 90
    }
    else if (pieceType.includes('king')) {
        positionNumValue = 900
    }

    if (pieceType.includes('black')) {
        positionNumValue *= -1 
    }
    
    return positionNumValue
}

function addPiece(position, pieceType) {
    var change = 0
    if (position in game) {
        change += deletePiece(position)
    }
    game[position] = pieceType
    change += pieceValue(position)
    return change
}

function deletePiece(position) {
    const change = -pieceValue(position)
    delete game[position]
    return change
    
}

// function movePieceAI(startPosition, endPosition) {
//     var change = 0
//     const pieceType = game[startPosition]
//     change += deletePiece(startPosition)
//     if (endPosition in game) {
//         change += deletePiece(endPosition)
//     }

//     change += addPiece(endPosition, pieceType)

//     return change

// }

function buildTree(depth, side, currentChessValue, m = '') {
    var node = new TreeNode(currentChessValue)
    if (m != '') {
        node.move = m
    }

    if (depth <= 0) {
        //console.log(node.value)
        return node
    }

    const vMoves = viableMoves(side)

    side = side == 'white' ? 'black' : 'white'

    for (const piece in vMoves) {
        const possibleMoves = vMoves[piece]
        const pieceType = game[piece]

        
        currentChessValue += deletePiece(piece)

        possibleMoves.forEach(element => {

            var opposingPiece = ''
            if (element in game) {
                opposingPiece = game[element]
            }

            currentChessValue += addPiece(element, pieceType)
            const child = buildTree(depth-1, side, currentChessValue, `${piece}${element}`)
            node.add(child) 
            currentChessValue += deletePiece(element)

            if (opposingPiece !='') { //need to change
                currentChessValue += addPiece(element, opposingPiece)
            }

        })

        currentChessValue += addPiece(piece, pieceType)
    }
    
    return node
}

function moveAI(side) {
    const depth = 3
    

    var player = side == 'white' ? 'white' : 'black'
    var opponent = player == 'white' ? 'black' : 'white'
    const gameCopy = structuredClone(game)

    var boardValue = 0
    
    for (const piecePosition in game) {
        boardValue += pieceValue(piecePosition)
    }
    // console.log(boardValue)
    
    const moveTree = buildTree(depth, side, boardValue)

    // console.log(moveTree.children)

    const moves = searchTree(moveTree, player)
    const aiChoice = moveTree.children[moves[0]].move
    const startPosition = aiChoice.substring(0,2)
    const endPosition = aiChoice.substring(2,4)
    //console.log(startPosition + " " + endPosition)
    movePiece(startPosition, endPosition)


}

function searchTree(node, side) {
    var returnValue = []
    if (node.children.length == 0) {
        //console.log(node.value)
        return [-1,node.value]
    }

    var score = 0
    var choice = 0
    if (side == 'white') {

        score = -Number.MAX_VALUE
        side = 'black'

        for (var i=0; i<node.children.length; i++) {
            const move = node.children[i]
            const val = searchTree(move,side)[1]
            // console.log(val)
            if (val > score) {
                choice = i
                score = val
            }
        }
    }
    else {
        score = Number.MAX_VALUE
        side = 'white'

        for (var i=0; i<node.children.length; i++) {
            const move = node.children[i]
            const val = searchTree(move,side)[1]
            // console.log(val)
            if (val < score) {
                choice = i
                score = val
            }
        }
    }
    
    returnValue.push(choice)
    returnValue.push(score)
    return returnValue

}

function printArray(pieceTable) {
    const row = pieceTable.length
    const column = pieceTable[0].length

    for (var i=0; i<8; i++) {
        var string = ''
        for (var j=0; j<8; j++) {
            string += " " + pieceTable[i][j]
        }
        console.log(string)
    }
    console.log()
}




// for (const key in pieceSquareTable) {
//     const pieceArray = pieceSquareTable[key]
//     console.log(key)
//     printArray(pieceArray)
// }






