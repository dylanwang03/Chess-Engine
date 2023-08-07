function pawnMoves(position) {
    const letter = position[0]
    const number = parseInt(position[1])
    const possibleMoves  = [];
    // console.log(letter + " " + number)
    var move1 = 1
    var move2 = 2
    if (game[position].includes('black')) {
        move1 *= -1
        move2 *= -1
    }
    
    //regular moves
    if (moveCondition(position,`${letter}${number+move1}`) == 2) {
        possibleMoves.push(`${letter}${number+move1}`)

        //checking if can make second move
        const firstMove = (game[position].includes('black') && number == 7) || (game[position].includes('white') && number == 2)
        if (firstMove && !(`${letter}${number+move2}` in game)) {
            possibleMoves.push(`${letter}${number+move2}`)
        }
    }

    //attacking moves
    if (letter >= 'b' && moveCondition(position,`${prevChar(letter)}${number+move1}`) == 1) {
        possibleMoves.push(`${prevChar(letter)}${number+move1}`)
    }

    if (letter <= 'g' && moveCondition(position,`${nextChar(letter)}${number+move1}`) == 1) {
        possibleMoves.push(`${nextChar(letter)}${number+move1}`)
    }
        
    return possibleMoves
}

function rookMoves(position) {
    const letter = position[0]
    const number = parseInt(position[1])
    const possibleMoves  = [];
    // console.log(letter + " " + number)

    //checking left squares
    var slidingNumber = number
    var slidingLetter = prevChar(letter)
    while (true) {
        if (!inbounds(`${slidingLetter}${slidingNumber}`)) {
            break
        }

        const cont = continueLooking(position, `${slidingLetter}${slidingNumber}`, possibleMoves)
        slidingLetter = prevChar(slidingLetter)

        if (!cont) {
            break
        }
        
    }

    //checking right squares
    var slidingNumber = number
    var slidingLetter = nextChar(letter)
    while (true) {
        if (!inbounds(`${slidingLetter}${slidingNumber}`)) {
            break
        }
        
        const cont = continueLooking(position, `${slidingLetter}${slidingNumber}`, possibleMoves)
        slidingLetter = nextChar(slidingLetter)

        if (!cont) {
            break
        }

        
    }

    //checking up squares
    var slidingNumber = number + 1
    var slidingLetter = letter
    while (true) {
        if (!inbounds(`${slidingLetter}${slidingNumber}`)) {
            break
        }
        
        const cont = continueLooking(position, `${slidingLetter}${slidingNumber}`, possibleMoves)
        slidingNumber += 1

        if (!cont) {
            break
        }
        
    }

    //checking down squares
    var slidingNumber = number - 1
    var slidingLetter = letter
    while (true) {
        if (!inbounds(`${slidingLetter}${slidingNumber}`)) {
            break
        }
        
        const cont = continueLooking(position, `${slidingLetter}${slidingNumber}`, possibleMoves)
        slidingNumber -= 1

        if (!cont) {
            break
        }
        
    }
    
    return possibleMoves

    
}

function bishopMoves(position) {
    const letter = position[0]
    const number = parseInt(position[1])
    const possibleMoves  = [];
    // console.log(letter + " " + number)

    //checking left Upper squares
    var slidingNumber = number - 1
    var slidingLetter = prevChar(letter)
    while (true) {
        if (!inbounds(`${slidingLetter}${slidingNumber}`)) {
            break
        }

        const cont = continueLooking(position, `${slidingLetter}${slidingNumber}`, possibleMoves)
        slidingLetter = prevChar(slidingLetter)
        slidingNumber -=1

        if (!cont) {
            break
        }
        
    }

    //checking right Upper squares
    var slidingNumber = number - 1
    var slidingLetter = nextChar(letter)
    while (true) {
        if (!inbounds(`${slidingLetter}${slidingNumber}`)) {
            break
        }
        
        const cont = continueLooking(position, `${slidingLetter}${slidingNumber}`, possibleMoves)
        slidingLetter = nextChar(slidingLetter)
        slidingNumber -=1

        if (!cont) {
            break
        }

        
    }

    //checking left Lower squares
    var slidingNumber = number + 1
    var slidingLetter = prevChar(letter)
    while (true) {
        if (!inbounds(`${slidingLetter}${slidingNumber}`)) {
            break
        }
        
        const cont = continueLooking(position, `${slidingLetter}${slidingNumber}`, possibleMoves)
        slidingLetter = prevChar(slidingLetter)
        slidingNumber += 1

        if (!cont) {
            break
        }
        
    }

    //checking down squares
    var slidingNumber = number + 1
    var slidingLetter = nextChar(letter)
    while (true) {
        if (!inbounds(`${slidingLetter}${slidingNumber}`)) {
            break
        }
        
        const cont = continueLooking(position, `${slidingLetter}${slidingNumber}`, possibleMoves)
        slidingLetter = nextChar(slidingLetter)
        slidingNumber += 1

        if (!cont) {
            break
        }
        
    }
    
    return possibleMoves

    
}

function queenMoves(position) {
    var possibleMoves  = [];
    const rMoves = rookMoves(position)
    const bMoves = bishopMoves(position)
    possibleMoves = rMoves.concat(bMoves)
    return possibleMoves
}

function kingMoves(position) {
    const letter = position[0]
    const number = parseInt(position[1])
    var possibleMoves  = [];

    if (inbounds(`${letter}${number+1}`) && moveCondition(position, `${letter}${number+1}`) > 0) {
        possibleMoves.push(`${letter}${number+1}`)
    }
    if (inbounds(`${letter}${number-1}`) && moveCondition(position, `${letter}${number-1}`) > 0) {
        possibleMoves.push(`${letter}${number-1}`)
    }
    if (inbounds(`${prevChar(letter)}${number+1}`) && moveCondition(position, `${prevChar(letter)}${number+1}`) > 0) {
        possibleMoves.push(`${prevChar(letter)}${number+1}`)
    }
    if (inbounds(`${prevChar(letter)}${number-1}`) && moveCondition(position, `${prevChar(letter)}${number-1}`) > 0) {
        possibleMoves.push(`${prevChar(letter)}${number-1}`)
    }
    if (inbounds(`${nextChar(letter)}${number+1}`) && moveCondition(position, `${nextChar(letter)}${number+1}`) > 0) {
        possibleMoves.push(`${nextChar(letter)}${number+1}`)
    }
    if (inbounds(`${nextChar(letter)}${number-1}`) && moveCondition(position, `${nextChar(letter)}${number-1}`) > 0) {
        possibleMoves.push(`${nextChar(letter)}${number-1}`)
    }
    if (inbounds(`${nextChar(letter)}${number}`) && moveCondition(position, `${nextChar(letter)}${number}`) > 0) {
        possibleMoves.push(`${nextChar(letter)}${number}`)
    }
    if (inbounds(`${prevChar(letter)}${number}`) && moveCondition(position, `${prevChar(letter)}${number}`) > 0) {
        possibleMoves.push(`${prevChar(letter)}${number}`)
    }

    return possibleMoves
}

function knightMoves(position) {
    const letter = position[0]
    const number = parseInt(position[1])
    var possibleMoves  = [];

    const twoLeft = prevChar(prevChar(letter))
    //console.log(twoLeft)
    const twoRight = nextChar(nextChar(letter))
    if (inbounds(`${twoLeft}${number+1}`) && moveCondition(position, `${twoLeft}${number+1}`) > 0) {
        possibleMoves.push(`${twoLeft}${number+1}`)
    }
    if (inbounds(`${twoLeft}${number-1}`) && moveCondition(position, `${twoLeft}${number-1}`) > 0) {
        possibleMoves.push(`${twoLeft}${number-1}`)
    }
    if (inbounds(`${twoRight}${number+1}`) && moveCondition(position, `${twoRight}${number+1}`) > 0) {
        possibleMoves.push(`${twoRight}${number+1}`)
    }
    if (inbounds(`${twoRight}${number-1}`) && moveCondition(position, `${twoRight}${number-1}`) > 0) {
        possibleMoves.push(`${twoRight}${number-1}`)
    }
    if (inbounds(`${prevChar(letter)}${number-2}`) && moveCondition(position, `${prevChar(letter)}${number-2}`) > 0) {
        possibleMoves.push(`${prevChar(letter)}${number-2}`)
    }
    if (inbounds(`${prevChar(letter)}${number+2}`) && moveCondition(position, `${prevChar(letter)}${number+2}`) > 0) {
        possibleMoves.push(`${prevChar(letter)}${number+2}`)
    }
    if (inbounds(`${nextChar(letter)}${number-2}`) && moveCondition(position, `${nextChar(letter)}${number-2}`) > 0) {
        possibleMoves.push(`${nextChar(letter)}${number-2}`)
    }
    if (inbounds(`${nextChar(letter)}${number+2}`) && moveCondition(position, `${nextChar(letter)}${number+2}`) > 0) {
        possibleMoves.push(`${nextChar(letter)}${number+2}`)
    }

    // console.log(position)
    // console.log(possibleMoves)



    return possibleMoves
}