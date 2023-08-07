function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}

function prevChar(c) {
    return String.fromCharCode(c.charCodeAt(0) - 1);
}

function toggleAvailable(possibleMoves) {
    possibleMoves.forEach(element => {
        //console.log(element)
        const tile = document.getElementById(element)
        tile.classList.toggle("possibleMove")

    });
}

function inbounds(position) {
    const letter = position[0]
    const number = parseInt(position.substring(1))
   
    return (letter <= 'h' && letter >= 'a' && number <=8 && number>=1)
}

function clearTileImage(position) {
    const tileChildren = Array.from(document.getElementById(position).children)

    var index = 0
    var imageFound = false
    for (var i=0; i<tileChildren.length; i++) {
        if (tileChildren[i].classList.contains('tileImage')) {
            const image = document.getElementById(position)
            const temp = image.childNodes[i]
            temp.parentNode.removeChild(temp)
            break
        }
    }
}

function changeTurn() {
    player = player == 'black' ? 'white' : 'black'
}