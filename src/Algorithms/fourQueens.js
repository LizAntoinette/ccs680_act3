export function backtrackingQueens(){
  var board = new Array(4);
  return queen(board, 0, 4); // start one queen at a time and satisfy constraints
}


function queen(board, current, size){
  if (current === size) return true; // return true if we've placed the nth queen

  for (var row = 0; row < size; row++) {
    board[currentQueen] = row; // set that queen and check if it's valid
    
    if (noConflicts(board, current)) {
      var done = queen(board, current + 1, size); // if it works, go deeper
      if (done) return true;
    }
  }
  return false;
}


function noConflicts(board, current){
  for (var queen = 0; queen < current; queen++) { 
    var y1 = board[x1], y2 = board[x2];
    // check against every queen already placed
    if (y1 === y2 || Math.abs(x2 - x1) === Math.abs(y2 - y1))
      return false;
  }
  return true;
}