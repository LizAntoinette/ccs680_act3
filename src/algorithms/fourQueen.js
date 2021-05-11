let animation = [];
export function fourQueen(){
  let board = [0, 0, 0, 0];
  
  let b = new Array(4);
  console.log(b);
  console.log("Is this working");
  console.log(board); 

  console.log("WTF")
  let thefourQueen = queen(board, 0, 4);
  return [thefourQueen, animation] // start one queen at a time and satisfy constraints
}


function queen(board, current, size){
  if (current === size) return true; // return true if we've placed the nth queen

  for (var row = 0; row < size; row++) {
   
    board[current] = row; // set that queen and check if it's valid
    
    animation.push({col:current, rowz:row});
 
    if (noConflicts(board, current)) {
     
      var done = queen(board, current + 1, size);
     // if it works, go deeper
      
      if (done) return true;
    }
  }
  console.log("this is the animation below")
  //console.log(animation);
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