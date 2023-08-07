function getMoves (position) {
    //console.log(game[position])
    if (game[position].includes('pawn')) {
        return pawnMoves(position)
    }
    else if (game[position].includes('bishop')) {
       return bishopMoves(position)
    }
    else if (game[position].includes('knight')) {
        return knightMoves(position)
    }
    else if (game[position].includes('rook')) {
        return rookMoves(position)
    }
    else if (game[position].includes('queen')) {
        return queenMoves(position)
    }
    else if (game[position].includes('king')) {
        return kingMoves(position)
    }
    else {
        console.log("ERROR")
    }
}

// 2 empty square
// 1 opponent square
// friendly square
function moveCondition(piecePosition, position) {
    const attackColor = game[piecePosition].includes('black') ? 'black' : 'white'
    
    if (!(position in game)) {
        return 2
    }
    else {
        const sameTeam = (game[position].includes('black') && attackColor == 'black') || (game[position].includes('white') && attackColor == 'white')
        if (sameTeam) {
            return 0
        }
        else {
            return 1
        }
    }
}


function continueLooking(position, slidingPosition, possibleMoves) {
    const mCondition = moveCondition(position, slidingPosition)
    if (mCondition == 2) {
        possibleMoves.push(slidingPosition)
        return true
    }
    else if (mCondition == 1) {
        possibleMoves.push(slidingPosition)
        return false
    }
    else {
        return false
    }
}



function movePiece(startPosition, movePosition) {
    clearTileImage(startPosition)
    clearTileImage(movePosition)

    const pieceType = game[startPosition]   //moving the piece in game object
    delete game[startPosition]
    game[movePosition] = pieceType
    //console.log("moving piece")

    const endTile = document.getElementById(movePosition)
    const newImage = document.createElement('img')
    newImage.classList.add("tileImage")
    newImage.src = `img/${game[movePosition]}.png`
    // newImage.style.width = '50px'
    endTile.appendChild(newImage)    


    
}



var playableMoves = {};

function viableMoves(color) {
    var player = color == 'white' ? 'white' : 'black'
    var opponent = player == 'white' ? 'black' : 'white'
    // const gameCopy = structuredClone(game)
    

    
    const playerPieces = collectColorPieces(player)
    const playerMoves = findMoves(playerPieces)
    playableMoves = {};
    //console.log(playerMoves)
    // console.log(game)
    
    // console.log(game)

    
    for (const piece in playerMoves) {
        


        const possibleMoves = playerMoves[piece]
        const pieceType = game[piece]
        delete game[piece]
        var piecePlayableMoves = []

        
        
        possibleMoves.forEach(element => {

            // game = structuredClone(gameCopy)
            // delete game[piece]
            var opposingPiece = ''
            if (element in game) {
                opposingPiece = game[element]
            }
            game[element] = pieceType   //this is one of Player's possible moves
            //console.log(collectColorPieces(player))
            if (!inCheck(player)) {
                piecePlayableMoves.push(element)
            }

            delete game[element]

            if (opposingPiece != '') {
                game[element] = opposingPiece
            }


        });


        game[piece] = pieceType
        // game = gameCopy
        playableMoves[piece] = piecePlayableMoves
    }

    

    
    
    return playableMoves
}

function checkMate(opponent) {
    opponentMoves = viableMoves(opponent)
    var numMoves = 0
    for (const piece in opponentMoves) {
        numMoves += opponentMoves[piece].length
    }
    //console.log(numMoves)
    if (numMoves == 0) {
        return true
    }
    return false
}