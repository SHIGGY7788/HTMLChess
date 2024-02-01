// Array to store chess board tiles
const chessBoard = document.getElementById('chessBoard');
let tiles = [];
let possibleMoves = [];
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let selectedPiece = null;
let previouslySelectedPiece = null;
let previousPosition = null;
let previouslySelectedTile = null;
let player1 = "white";
let player2 = "black";
let curplayer = player1;

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
  constructor(name, color, position, image, status, hasMoved, isSelected) {
    this.name = name;
    this.color = color;
    this.position = position;
    this.image = image;
    this.status = status;
    this.hasMoved = hasMoved;
    this.isSelected = false;
  }
}

// Create chess pieces with their svgs and positions=
const blackKing = new chessPiece('king', 'black', 'E8', '<img src=./svgs/BlackKing.svg>', 'alive', false, false);
const blackQueen = new chessPiece('queen', 'black', 'D8', '<img src=./svgs/BlackQueen.svg>', 'alive', false, false);
const blackBishop1 = new chessPiece('bishop', 'black', 'C8', '<img src=./svgs/BlackBishop.svg>', 'alive', false, false);
const blackBishop2 = new chessPiece('bishop', 'black', 'F8', '<img src=./svgs/BlackBishop.svg>', 'alive', false, false);
const blackKnight1 = new chessPiece('knight', 'black', 'B8', '<img src=./svgs/BlackKnight.svg>', 'alive', false, false);
const blackKnight2 = new chessPiece('knight', 'black', 'G8', '<img src=./svgs/BlackKnight.svg>', 'alive', false, false);
const blackRook1 = new chessPiece('rook', 'black', 'A8', '<img src=./svgs/BlackRook.svg>', 'alive', false, false);
const blackRook2 = new chessPiece('rook', 'black', 'H8', '<img src=./svgs/BlackRook.svg>', 'alive', false, false);
const blackPawn1 = new chessPiece('pawn', 'black', 'A7', '<img src=./svgs/BlackPawn.svg>', 'alive', false, false);
const blackPawn2 = new chessPiece('pawn', 'black', 'B7', '<img src=./svgs/BlackPawn.svg>', 'alive', false, false);
const blackPawn3 = new chessPiece('pawn', 'black', 'C7', '<img src=./svgs/BlackPawn.svg>', 'alive', false, false);
const blackPawn4 = new chessPiece('pawn', 'black', 'D7', '<img src=./svgs/BlackPawn.svg>', 'alive', false, false);
const blackPawn5 = new chessPiece('pawn', 'black', 'E7', '<img src=./svgs/BlackPawn.svg>', 'alive', false, false);
const blackPawn6 = new chessPiece('pawn', 'black', 'F7', '<img src=./svgs/BlackPawn.svg>', 'alive', false, false);
const blackPawn7 = new chessPiece('pawn', 'black', 'G7', '<img src=./svgs/BlackPawn.svg>', 'alive', false, false);
const blackPawn8 = new chessPiece('pawn', 'black', 'H7', '<img src=./svgs/BlackPawn.svg>', 'alive', false, false);

const whiteKing = new chessPiece('king', 'white', 'E1', '<img src=./svgs/WhiteKing.svg>', 'alive', false, false);
const whiteQueen = new chessPiece('queen', 'white', 'D1', '<img src=./svgs/WhiteQueen.svg>', 'alive', false, false);
const whiteBishop1 = new chessPiece('bishop', 'white', 'C1', '<img src=./svgs/WhiteBishop.svg>', 'alive', false, false);
const whiteBishop2 = new chessPiece('bishop', 'white', 'F1', '<img src=./svgs/WhiteBishop.svg>', 'alive', false, false);
const whiteKnight1 = new chessPiece('knight', 'white', 'B1', '<img src=./svgs/WhiteKnight.svg>', 'alive', false, false);
const whiteKnight2 = new chessPiece('knight', 'white', 'G1', '<img src=./svgs/WhiteKnight.svg>', 'alive', false, false);
const whiteRook1 = new chessPiece('rook', 'white', 'A1', '<img src=./svgs/WhiteRook.svg>', 'alive', false, false);
const whiteRook2 = new chessPiece('rook', 'white', 'H1', '<img src=./svgs/WhiteRook.svg>', 'alive', false, false);
const whitePawn1 = new chessPiece('pawn', 'white', 'A2', '<img src=./svgs/WhitePawn.svg>', 'alive', false, false);
const whitePawn2 = new chessPiece('pawn', 'white', 'B2', '<img src=./svgs/WhitePawn.svg>', 'alive', false, false);
const whitePawn3 = new chessPiece('pawn', 'white', 'C2', '<img src=./svgs/WhitePawn.svg>', 'alive', false, false);
const whitePawn4 = new chessPiece('pawn', 'white', 'D2', '<img src=./svgs/WhitePawn.svg>', 'alive', false, false);
const whitePawn5 = new chessPiece('pawn', 'white', 'E2', '<img src=./svgs/WhitePawn.svg>', 'alive', false, false);
const whitePawn6 = new chessPiece('pawn', 'white', 'F2', '<img src=./svgs/WhitePawn.svg>', 'alive', false, false);
const whitePawn7 = new chessPiece('pawn', 'white', 'G2', '<img src=./svgs/WhitePawn.svg>', 'alive', false, false);
const whitePawn8 = new chessPiece('pawn', 'white', 'H2', '<img src=./svgs/WhitePawn.svg>', 'alive', false, false);

const pieces = [blackKing, blackQueen, blackBishop1, blackBishop2, blackKnight1, blackKnight2, blackRook1, blackRook2, blackPawn1, blackPawn2, blackPawn3, blackPawn4, blackPawn5, blackPawn6, blackPawn7, blackPawn8, whiteKing, whiteQueen, whiteBishop1, whiteBishop2, whiteKnight1, whiteKnight2, whiteRook1, whiteRook2, whitePawn1, whitePawn2, whitePawn3, whitePawn4, whitePawn5, whitePawn6, whitePawn7, whitePawn8];


//Place chess pieces on the board
function UpdateBoard() {
    tiles.forEach(tile => {
        //Add the images to the tiles
        for (let i = 0; i < pieces.length; i++) {
            if (tile.dataset.identifier === pieces[i].position) {
                tile.innerHTML = pieces[i].image;
            }
        }

    });
}
UpdateBoard();

//Function to get possible moves of white pawn
function GetWhitePawnMoves(piece) {
    console.log("white pawn selected")
    if (piece.color === 'white') {
        let isOccupied = false;
        for (let i = 0; i < pieces.length; i++) {
            if (pieces[i].position === piece.position[0] + (parseInt(piece.position[1]) + 1)) {
                console.log("Space above is occupied");
                isOccupied = true;
            }
        }
        if (!isOccupied) {
            //if they havent moved, allow up 2
            //Else allow up 1
            if (piece.hasMoved === false) {
                possibleMoves.push(piece.position[0] + (parseInt(piece.position[1]) + 1));
                possibleMoves.push(piece.position[0] + (parseInt(piece.position[1]) + 2));
            } else {
                possibleMoves.push(piece.position[0] + (parseInt(piece.position[1]) + 1));
            }
        }
        for (let i = 0; i < pieces.length; i++) {
            if (pieces[i].position === (letters[letters.indexOf(piece.position[0]) + 1] + (parseInt(piece.position[1]) + 1)) & pieces[i].color === 'black') {
                possibleMoves.push(pieces[i].position);
            } else if (pieces[i].position === (letters[letters.indexOf(piece.position[0]) - 1] + (parseInt(piece.position[1]) + 1)) & pieces[i].color === 'black') {
                possibleMoves.push(pieces[i].position);
            }
        }
    }
    console.log(possibleMoves)
} 

//Function to get possible moves of black pawn
function GetBlackPawnMoves (piece) {
    console.log("black pawn selected")
    if (piece.color === 'black') {
        let isOccupied = false;
        for (let i = 0; i < pieces.length; i++) {
            if (pieces[i].position === piece.position[0] + (parseInt(piece.position[1]) - 1)) {
                console.log("Space below is occupied");
                isOccupied = true;
            }
        }
        if (!isOccupied) {
            //if they havent moved, allow down 2
            //Else allow down 1
            if (piece.hasMoved === false) {
                possibleMoves.push(piece.position[0] + (parseInt(piece.position[1]) - 1));
                possibleMoves.push(piece.position[0] + (parseInt(piece.position[1]) - 2));
            } else {
                possibleMoves.push(piece.position[0] + (parseInt(piece.position[1]) - 1));
            }
            
        }
        //Check if there is a piece diagonally
        for (let i = 0; i < pieces.length; i++) {
            if (pieces[i].position === (letters[letters.indexOf(piece.position[0]) + 1] + (parseInt(piece.position[1]) - 1)) & pieces[i].color === 'white') {
                possibleMoves.push(pieces[i].position);
            } else if (pieces[i].position === (letters[letters.indexOf(piece.position[0]) - 1] + (parseInt(piece.position[1]) - 1)) & pieces[i].color === 'white') {
                possibleMoves.push(pieces[i].position);
            }
        }
    }
    console.log(possibleMoves)
}




tiles.forEach(tile => {
    tile.addEventListener('click', () => {
  
      //Tile border on click
      // Remove the 'selected' class from the previously selected tile
      if (previouslySelectedTile !== null) {
        previouslySelectedTile.classList.remove('selected');
      }
      // Add the 'selected' class to the clicked tile
      tile.classList.add('selected');
      previouslySelectedTile = tile;



  
      if (curplayer == player1) {
          for (let i = 0; i < pieces.length; i++) {
              if (tile.dataset.identifier === pieces[i].position && pieces[i].color === 'white') {
                  selectedPiece = pieces[i];
                  console.log(selectedPiece);

                  //White pawn moves
                  if (selectedPiece.name === 'pawn') {
                      GetWhitePawnMoves(selectedPiece);
                  }
              }
          }
        }
        else if (curplayer == player2) {
            for (let i = 0; i < pieces.length; i++) {
                if (tile.dataset.identifier === pieces[i].position && pieces[i].color === 'black') {
                    selectedPiece = pieces[i];
                    console.log(selectedPiece);

                    //Black pawn moves
                    if (selectedPiece.name === 'pawn') {
                        GetBlackPawnMoves(selectedPiece);
                    }
                }
            }
        }
    });
}); 






















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


