const chessBoard = document.getElementById('chessBoard');

// Array to store chess board tiles
let tiles = [];

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

// Loop to create chess board tiles
for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    const tile = document.createElement('div');
    tile.classList.add('chess-tile');
    tile.classList.add((row + col) % 2 === 0 ? 'white' : 'black');

    // Calculate the chess board position identifier
    const identifier = letters[col] + (8 - row);
    tile.setAttribute('data-identifier', identifier);

    chessBoard.appendChild(tile);
    tiles.push(tile);
  }
}

console.log(tiles)


class chessPiece {
  constructor(name, color, position, image, status, hasMoved) {
    this.name = name;
    this.color = color;
    this.position = position;
    this.image = image;
    this.status = status;
    this.hasMoved = hasMoved;
  }
}

// Create chess pieces with their svgs and positions=
const blackKing = new chessPiece('king', 'black', 'E8', '<img src=./svgs/BlackKing.svg>', 'alive', false);
const blackQueen = new chessPiece('queen', 'black', 'D8', '<img src=./svgs/BlackQueen.svg>', 'alive', false);
const blackBishop1 = new chessPiece('bishop', 'black', 'C8', '<img src=./svgs/BlackBishop.svg>', 'alive', false);
const blackBishop2 = new chessPiece('bishop', 'black', 'F8', '<img src=./svgs/BlackBishop.svg>', 'alive', false);
const blackKnight1 = new chessPiece('knight', 'black', 'B8', '<img src=./svgs/BlackKnight.svg>', 'alive', false);
const blackKnight2 = new chessPiece('knight', 'black', 'G8', '<img src=./svgs/BlackKnight.svg>', 'alive', false);
const blackRook1 = new chessPiece('rook', 'black', 'A8', '<img src=./svgs/BlackRook.svg>', 'alive', false);
const blackRook2 = new chessPiece('rook', 'black', 'H8', '<img src=./svgs/BlackRook.svg>', 'alive', false);
const blackPawn1 = new chessPiece('pawn', 'black', 'A7', '<img src=./svgs/BlackPawn.svg>', 'alive', false);
const blackPawn2 = new chessPiece('pawn', 'black', 'B7', '<img src=./svgs/BlackPawn.svg>', 'alive', false);
const blackPawn3 = new chessPiece('pawn', 'black', 'C7', '<img src=./svgs/BlackPawn.svg>', 'alive', false);
const blackPawn4 = new chessPiece('pawn', 'black', 'D7', '<img src=./svgs/BlackPawn.svg>', 'alive', false);
const blackPawn5 = new chessPiece('pawn', 'black', 'E7', '<img src=./svgs/BlackPawn.svg>', 'alive', false);
const blackPawn6 = new chessPiece('pawn', 'black', 'F7', '<img src=./svgs/BlackPawn.svg>', 'alive', false);
const blackPawn7 = new chessPiece('pawn', 'black', 'G7', '<img src=./svgs/BlackPawn.svg>', 'alive', false);
const blackPawn8 = new chessPiece('pawn', 'black', 'H7', '<img src=./svgs/BlackPawn.svg>', 'alive', false);

const whiteKing = new chessPiece('king', 'white', 'E1', '<img src=./svgs/WhiteKing.svg>', 'alive', false);
const whiteQueen = new chessPiece('queen', 'white', 'D1', '<img src=./svgs/WhiteQueen.svg>', 'alive', false);
const whiteBishop1 = new chessPiece('bishop', 'white', 'C1', '<img src=./svgs/WhiteBishop.svg>', 'alive', false);
const whiteBishop2 = new chessPiece('bishop', 'white', 'F1', '<img src=./svgs/WhiteBishop.svg>', 'alive', false);
const whiteKnight1 = new chessPiece('knight', 'white', 'B1', '<img src=./svgs/WhiteKnight.svg>', 'alive', false);
const whiteKnight2 = new chessPiece('knight', 'white', 'G1', '<img src=./svgs/WhiteKnight.svg>', 'alive', false);
const whiteRook1 = new chessPiece('rook', 'white', 'A1', '<img src=./svgs/WhiteRook.svg>', 'alive', false);
const whiteRook2 = new chessPiece('rook', 'white', 'H1', '<img src=./svgs/WhiteRook.svg>', 'alive', false);
const whitePawn1 = new chessPiece('pawn', 'white', 'A2', '<img src=./svgs/WhitePawn.svg>', 'alive', false);
const whitePawn2 = new chessPiece('pawn', 'white', 'B2', '<img src=./svgs/WhitePawn.svg>', 'alive', false);
const whitePawn3 = new chessPiece('pawn', 'white', 'C2', '<img src=./svgs/WhitePawn.svg>', 'alive', false);
const whitePawn4 = new chessPiece('pawn', 'white', 'D2', '<img src=./svgs/WhitePawn.svg>', 'alive', false);
const whitePawn5 = new chessPiece('pawn', 'white', 'E2', '<img src=./svgs/WhitePawn.svg>', 'alive', false);
const whitePawn6 = new chessPiece('pawn', 'white', 'F2', '<img src=./svgs/WhitePawn.svg>', 'alive', false);
const whitePawn7 = new chessPiece('pawn', 'white', 'G2', '<img src=./svgs/WhitePawn.svg>', 'alive', false);
const whitePawn8 = new chessPiece('pawn', 'white', 'H2', '<img src=./svgs/WhitePawn.svg>', 'alive', false);



//Place chess pieces on the board
tiles.forEach(tile => {
  if (tile.dataset.identifier === blackKing.position) {
    tile.innerHTML = blackKing.image;
  } else if (tile.dataset.identifier === blackQueen.position) {
    tile.innerHTML = blackQueen.image;
  } else if (tile.dataset.identifier === blackBishop1.position) {
    tile.innerHTML = blackBishop1.image;
  } else if (tile.dataset.identifier === blackBishop2.position) {
    tile.innerHTML = blackBishop2.image;
  } else if (tile.dataset.identifier === blackKnight1.position) {
    tile.innerHTML = blackKnight1.image;
  } else if (tile.dataset.identifier === blackKnight2.position) {
    tile.innerHTML = blackKnight2.image;
  } else if (tile.dataset.identifier === blackRook1.position) {
    tile.innerHTML = blackRook1.image;
  } else if (tile.dataset.identifier === blackRook2.position) {
    tile.innerHTML = blackRook2.image;
  } else if (tile.dataset.identifier === blackPawn1.position) {
    tile.innerHTML = blackPawn1.image;
  } else if (tile.dataset.identifier === blackPawn2.position) {
    tile.innerHTML = blackPawn2.image;
  } else if (tile.dataset.identifier === blackPawn3.position) {
    tile.innerHTML = blackPawn3.image;
  } else if (tile.dataset.identifier === blackPawn4.position) {
    tile.innerHTML = blackPawn4.image;
  } else if (tile.dataset.identifier === blackPawn5.position) {
    tile.innerHTML = blackPawn5.image;
  } else if (tile.dataset.identifier === blackPawn6.position) {
    tile.innerHTML = blackPawn6.image;
  } else if (tile.dataset.identifier === blackPawn7.position) {
    tile.innerHTML = blackPawn7.image;
  } else if (tile.dataset.identifier === blackPawn8.position) {
    tile.innerHTML = blackPawn8.image;
  } else if (tile.dataset.identifier === whiteKing.position) {
    tile.innerHTML = whiteKing.image;
  } else if (tile.dataset.identifier === whiteQueen.position) {
    tile.innerHTML = whiteQueen.image;
  } else if (tile.dataset.identifier === whiteBishop1.position) {
    tile.innerHTML = whiteBishop1.image;
  } else if (tile.dataset.identifier === whiteBishop2.position) {
    tile.innerHTML = whiteBishop2.image;
  } else if (tile.dataset.identifier === whiteKnight1.position) {
    tile.innerHTML = whiteKnight1.image;
  } else if (tile.dataset.identifier === whiteKnight2.position) {
    tile.innerHTML = whiteKnight2.image;
  } else if (tile.dataset.identifier === whiteRook1.position) {
    tile.innerHTML = whiteRook1.image;
  } else if (tile.dataset.identifier === whiteRook2.position) {
    tile.innerHTML = whiteRook2.image;
  } else if (tile.dataset.identifier === whitePawn1.position) {
    tile.innerHTML = whitePawn1.image;
  } else if (tile.dataset.identifier === whitePawn2.position) {
    tile.innerHTML = whitePawn2.image;
  } else if (tile.dataset.identifier === whitePawn3.position) {
    tile.innerHTML = whitePawn3.image;
  } else if (tile.dataset.identifier === whitePawn4.position) {
    tile.innerHTML = whitePawn4.image;
  } else if (tile.dataset.identifier === whitePawn5.position) {
    tile.innerHTML = whitePawn5.image;
  } else if (tile.dataset.identifier === whitePawn6.position) {
    tile.innerHTML = whitePawn6.image;
  } else if (tile.dataset.identifier === whitePawn7.position) {
    tile.innerHTML = whitePawn7.image;
  } else if (tile.dataset.identifier === whitePawn8.position) {
    tile.innerHTML = whitePawn8.image;
  }

});



//Array of pieces
const pieces = [blackKing, blackQueen, blackBishop1, blackBishop2, blackKnight1, blackKnight2, blackRook1, blackRook2, blackPawn1, blackPawn2, blackPawn3, blackPawn4, blackPawn5, blackPawn6, blackPawn7, blackPawn8, whiteKing, whiteQueen, whiteBishop1, whiteBishop2, whiteKnight1, whiteKnight2, whiteRook1, whiteRook2, whitePawn1, whitePawn2, whitePawn3, whitePawn4, whitePawn5, whitePawn6, whitePawn7, whitePawn8];

let possibleMoves = [];
function GetPossibleMoves(piece) {
    console.log(piece.name)
    if (piece.name === 'pawn' & piece.color === 'white') {
        console.log('pawn')
        if (piece.hasMoved === false) {
            //Pawn can move forward 2 tiles
            console.log('hasnt moved')
            //Check if tile in front is empty
            //Check if tile 2 in front is empty
            //If both are empty, add to possible moves
            

        }
    }
}




tiles.forEach(tile => {
  tile.addEventListener('click', () => {
    for (let i = 0; i < pieces.length; i++) {
        if (pieces[i].position === tile.dataset.identifier) {
          GetPossibleMoves(pieces[i])
        }
    }
  })
})





















/*
SVGs for chess pieces
black set:
king : <img src=./svgs/BlackKing.svg>
queen : <img src=./svgs/BlackQueen.svg>
bishop : <img src=./svgs/BlackBishop.svg>
knight : <img src=./svgs/BlackKnight.svg>
rook : <img src=./svgs/BlackRook.svg>
pawn : <img src=./svgs/BlackPawn.svg>

white set:
king : <img src=./svgs/WhiteKing.svg>
queen : <img src=./svgs/WhiteQueen.svg>
bishop : <img src=./svgs/WhiteBishop.svg>
knight : <img src=./svgs/WhiteKnight.svg>
rook : <img src=./svgs/WhiteRook.svg>
pawn : <img src=./svgs/WhitePawn.svg>
*/


