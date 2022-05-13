/*In this exercise we will be writing an algorithm, to detect if two queens on a chess board can attack each other.

Queen Threat Detector
A game of chess is played on an 8 column by 8 row board. In the game of chess, a queen can attack pieces which are on the same row, column, or diagonal.

Chess Board Queen

In JavaScript, we can represent a chessboard using an 8 by 8 array (8 arrays within an array). For this exercise, our chess board will have 2 queens, and nothing else. A 1 in the array represents a queen on the corresponding square, and a O in the array represents an unoccupied square.

So the following chess board:

chess board example

Would be represented in JavaScript like this:

[
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
Our first challenge will be to write a function that generates a chess board like this. We will then write a function to detect weather or not the two queens are positioned so that they attack each other.


let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
Expected Output
[
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
true
Input
let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
Expected Output
[
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
false
Instruction
Create a function generateBoard which will return a nested array representing the board, containing the location of two queens.
Create a function called queenThreat that will indicate whether or not the two queens are positioned so that they attack each other.
*/

// [SOLUTION?]
//In generatedBoard function:
// 1. Create a chess board(2d array) using nested for loop 
// 2. In #1, if it's a positon of queen, print 1 instead of 0
//In queenThreat function:
// 3. Find two postions of queens using nested for loop?
// 4. Check which conditions the position should mach
// 5. Return true or false
  
let generatedBoard = function(whiteQueen, blackQueen) {
    
};

let queenThreat = function(generatedBoard) {

// condition01(two positions are on the same row, column, or diagonal)
// return true;

//condition02(two positions are NOT on the same row, column, or diagonal)
// return false;
};
