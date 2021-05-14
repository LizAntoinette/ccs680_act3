export function geneticAlgorithm(){

}


function random_individual(size){
  var individual = 0; 
  for(var i = 1; i<=8;i++){
      individual = individual + Math.floor(Math.random() * 9) * Math.pow(10)
   }
   return individual;
}

let maxFitness = 28
