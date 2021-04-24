export function fourQueen(){
  let board = [0, 0, 0, 0];
  
  let b = new Array(4);
  console.log(b);
  console.log("Is this working");
  console.log(board); 
  return queen(board, 0, 4); // start one queen at a time and satisfy constraints
}

let animation = [];
function queen(board, current, size){
  if (current === size) return true; // return true if we've placed the nth queen

  for (var row = 0; row < size; row++) {
   
    board[current] = row; // set that queen and check if it's valid
    
    animation.push({col:current, row:row});
   
    if (noConflicts(board, current)) {
     
      var done = queen(board, current + 1, size);
     // if it works, go deeper
     
      if (done) return animation;
    }
  }
  return false;
}


function noConflicts(board, current){
  for (var queen = 0; queen < current; queen++) { 
    var y1 = board[queen], y2 = board[current];
    // check against every queen already placed
    if (y1 === y2 || Math.abs(current - queen) === Math.abs(y2 - y1))
      return false;
  }
  return true;
}