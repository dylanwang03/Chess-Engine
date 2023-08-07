//collecting white and black pieces
function collectColorPieces(color) {
    pieces = []
    for (const key in game) {
        //console.log(`${key}: ${game[key]}`)
        if (game[key].includes(color)) {
           pieces.push(key)
        }
    }
    return pieces
}

function findKing(color) {
    for (const key in game) {
        if (game[key].includes(`${color}_king`)) {
            return key
        }
    }
    return ''
}

function kingAttacked(kingPosition, moves) {
    for (const piece in moves) {
        if (moves[piece].includes(kingPosition)) {
            return true
        }
    }
    return false
}

function findMoves(pieces) {
    var collectedMoves = []
    pieces.forEach(element => {
        const pieceMoves = getMoves(element)
        collectedMoves[element] = pieceMoves
    });
    return collectedMoves
}


function inCheck(color) {
    var player = color == 'white' ? 'white' : 'black'
    var opponent = player == 'white' ? 'black' : 'white'

    const king = findKing(player)
    var opponentPieces = collectColorPieces(opponent)
    var opponentMoves = findMoves(opponentPieces)
    //console.log(opponentMoves)

    return kingAttacked(king,opponentMoves)
}

