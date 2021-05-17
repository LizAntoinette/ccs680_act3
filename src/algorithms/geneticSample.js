
class Solution{

    constructor(chromosome) {
        this.chromosome = []
        chromosome.forEach(element => {
            this.chromosome.push(element)    
        });
        this.evaluate()
    }
  
    evaluate(){
        this.fitness = evaluate(this.chromosome)
    }
  
  }
  
  class GA {
  
    constructor(populationSize, mutationRate, crossoverRate, max_generation, ktournament, nqueens){
        this.populationSize = populationSize
        this.mutationRate = mutationRate
        this.crossoverRate = crossoverRate
        this.max_generation = max_generation
        this.ktournament = ktournament
  
        this.nqueens = nqueens
  
        this.population = []
        this.offspring = []
    }
  
    initializePop(){
        for (let i = 0; i < this.populationSize; i++) {
            this.population.push(randomSolution(this.nqueens))            
        }
    }
  
    performCrossOver(){
        while (this.offspring.length < this.populationSize) {
            let fatherA = this.tournamentK(this.ktournament)
            let fatherB = this.tournamentK(this.ktournament)
  
            if(Math.random() < this.crossoverRate){
                let sons = this.PMX(fatherA.chromosome, fatherB.chromosome)
                this.offspring.push(new Solution(sons[0]))
                this.offspring.push(new Solution(sons[1]))
            }else{
                this.offspring.push(new Solution(fatherA.chromosome))
                this.offspring.push(new Solution(fatherB.chromosome))
            }
        }
  
    }
  
  
    PMX(ChromosomeA, ChromosomeB){
        
        let ind1 = ChromosomeA.slice(); let ind2 = ChromosomeB.slice()
        let size = ind1.length
        let p1 = Array.from({length:size}, () => 0)
        let p2 = Array.from({length:size}, () => 0)
  
        //Initialize the position of each indices in the individuals
        for (let i = 0; i < size; i++){
            p1[ind1[i]] = i
            p2[ind2[i]] = i
        }
        
        // Choose crossover points
        let cxpoint1 = Math.floor(Math.random() * size)
        let cxpoint2 = Math.floor(Math.random() * (size - 1)) 
  
        if (cxpoint2 >= cxpoint1)
            cxpoint2 += 1
        else {
            let aux = cxpoint1
            cxpoint1 = cxpoint2
            cxpoint2 = aux
  
        }
  
        // Apply crossover between cx points
        for (let i = cxpoint1; i < cxpoint2; i++){
            let temp1 = ind1[i]
            let temp2 = ind2[i]
  
            ind1[i] = temp2
            ind1[p1[temp2]] = temp1
  
            ind2[i] = temp1
            ind2[p2[temp1]] = temp2
  
            let aux = p1[temp1]
            p1[temp1] = p1[temp2]
            p1[temp2] = aux;
            
            let aux2 = p2[temp1]
            p2[temp1] = p2[temp2]
            p2[temp2] = aux2
        }
  
        return [ind1, ind2]
        
    }
  
    // Simple swap mutation
    mutation(){
        for (let i = 0; i < this.offspring.length; i++) {
  
            if (Math.random() < this.mutationRate) {
  
                let x = Math.floor(Math.random() * this.nqueens)
                let y = Math.floor(Math.random() * this.nqueens)
  
                if(x != y ){
                    let aux = this.offspring[i].chromosome[x]
                    this.offspring[i].chromosome[x] = this.offspring[i].chromosome[y]
                    this.offspring[i].chromosome[y] = aux
  
                    this.offspring[i].evaluate
                }
  
            }
            
        }
    }
  
    tournamentK(k){
  
        let listK = Array.from({length: k}, () => Math.floor(Math.random() * this.populationSize))
        listK.sort(function(a,b){ return b - a  })
  
        return this.population[listK[0]]
    }
  
    mergePop(){
        this.offspring.forEach(element => {
            this.population.push(new Solution(element.chromosome))
        });
        this.offspring = []
        this.population.sort(orderPop)
        this.population.splice(this.populationSize)
    }
  
  }
  
  function orderPop(a,b){
    if(a.fitness > b.fitness){
        return 1
    }
    if(a.fitness < b.fitness){
        return -1
    }
    return 0
  }
  
  function randomSolution(nqueens){
    let tempArray = Array.from({length: nqueens}, (v, i) => i)
    tempArray.shuffle()
    return new Solution(tempArray)
  }
  
  function evaluate(chromosome){
    let clashes = 0.0
    
    for (let i = 0; i < chromosome.length; i++){
        for (let j = 0; j < chromosome.length; j++){
            if (i != j){
                var dx = Math.abs(i - j)
                var dy = Math.abs(chromosome[i] - chromosome[j])
                if(dx == dy)
                    clashes += 1
            }
        }
    }
  
    return clashes
  }
  
  function runOneGeneration() {
  
    ga.performCrossOver()
    ga.mutation()
    ga.mergePop()
    ga.population.sort(orderPop)
   
    countGen++
   
    if (countGen == ga.max_generation || ga.population[0].fitness == 0)
        stopFunction()
    console.log("This is working I thinke....")
    // requires plot.js script to plot solution in the chessboard
    console.log(ga.population[0].chromosome)
  

  
  }
  
  function stopFunction() {
    clearInterval(runningVar)
  }
  
  //Customized function to add the shuffle capacity on protopyte Array    
  Array.prototype.shuffle = function() {
    var input = this
     
    for (var i = input.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1)) 
        var itemAtIndex = input[randomIndex] 
         
        input[randomIndex] = input[i] 
        input[i] = itemAtIndex
    }
    return input
  }
  
  // Global vars
  let ga
  let countGen = 1
  let runningVar
  export function solve(){
  
   
    // load information from page
    let pop = 100
    let mut = 0.05
    let cx = 0.8
    let maxg = 200
    let delay = 100
    let ktournament =3
    let nqueens = 8
    
   console.log("this is actually working")
    //create and initialize the Genetic Algorithm
    ga = new GA(pop, mut, cx, maxg, ktournament, nqueens)
    countGen = 0
  
    ga.initializePop()
  
    // Main loop running with setInvertal function
    runningVar = setInterval(function(){ runOneGeneration() }, delay)
  }
  