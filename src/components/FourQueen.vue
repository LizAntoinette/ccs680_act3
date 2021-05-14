<template>
  <div>
    <div>
      <table class="table-bordered">
        <tbody>
          <tr v-for="items in chessboard">
            <td
              v-for="elements in items"
              :key="elements.id"
              :id = elements.name
              ref="elements.id"
              :class="elements.class"
              height="95px"
              width="90px"
            >

              <!-- <img src="../assets/queen.png"  ref="elements.id" alt="Queen"> -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mt-3">
      <b-button class="mr-2" size="sm" :disabled="btnReset">Reset</b-button>
      <b-button class="mr-2" size="sm" @click="startforQueen" :disabled="btnStart">Start</b-button>

      <!-- <b-button class="mr-2" size="sm" :disabled="btnPrev" @click="prevfourQueen">Previous</b-button> -->
      <b-button class="mr-2" size="sm"  :disabled="btnNext" @click="nextfourQueen">Next</b-button>
    </div>
  </div>
</template>
<script>
import { fourQueen } from "../algorithms/fourQueen";

export default {
  data() {
    return {
      chessboard: null,
      animateArray: [],
      btnNext: true,
      btnPrev: true,
      btnReset: true,
      btnStart: false,
      prevQueen0: null,
      prevQueen1: null,
      prevQueen2: null,
      prevQueen3: null,
      nxtQueen0: null,
      nxtQueen1: null,
      nxtQueen2: null,
      nxtQueen3: null,
      counter: 1,
      prevCtr: 0, 
      prevOnce: 0
    };
  },
  created: function () {
    this.createChessBoard();
  },
  mounted:function(){
      console.log(this.$refs.td11)
    // startforQueen(){
      
    // }
  },
  methods: {
    createChessBoard() {
      this.chessboard = [];
      for (let i = 0; i < 4; i++) {
        let currentRow = [];
        for (let j = 0; j < 4; j++) {
          if ((j % 2 == 0 && i % 2 == 0) || (j % 2 != 0 && i % 2 != 0)) {
            currentRow.push({ name: "td" + i + "" + j, class: "black" });
          } else {
            currentRow.push({ name: "td" + i + "" + j, class: "white" });
          }
        }
        this.chessboard.push(currentRow);
      }
     
    },
   
    startforQueen() {
      var active = false;
      [active, this.animateArray] = fourQueen();
      this.btnNext = false;
      this.btnStart = true;
      const move = this.animateArray[0]
      this.addQueen(move["col"], move["rowz"])
      this.prevQueen0 = move["rowz"];
      console.log(this.animateArray)
      
    },
    nextfourQueen() {
      console.log("this will go next");
      const moves = this.animateArray;
      var move = moves[this.counter];
      console.log(move);
      this.counter += 1;
          if(move["col"] === 0){
             console.log(this.prevQueen0);
              if(this.prevQueen0 !== null){
                 this.removeQueen(move["col"],this.prevQueen0);
              }
               this.addQueen(move["col"], move["rowz"])
               this.prevQueen0 = move["rowz"];
          }
          else if(move["col"] === 1){
             console.log(this.prevQueen1);
              if(this.prevQueen1 !== null){
                 this.removeQueen(move["col"], this.prevQueen1);
              }
              this.addQueen(move["col"], move["rowz"])
              this.prevQueen1 = move["rowz"];
          }
          else if(move["col"] === 2){
             console.log(this.prevQueen2);
              if(this.prevQueen2 !== null){
                 this.removeQueen(move["col"],  this.prevQueen2);
              }
              this.addQueen(move["col"], move["rowz"])
              this.prevQueen2 = move["rowz"];
          }
          else if(move["col"] === 3){
             console.log(this.prevQueen3);
              if(this.prevQueen3 !== null){
                 this.removeQueen(move["col"], this.prevQueen3);
              }
              this.addQueen(move["col"], move["rowz"])
              this.prevQueen3 = move["rowz"];
          }
        console.log(this.prev)
        
        this.btnPrev = false;
        this.prevQ = false;
        this.prevCtr = this.counter;

        this.nxtQueen0 = this.prevQueen0;
        this.nxtQueen1 = this.prevQueen1;
        this.nxtQueen2 = this.prevQueen2;
        this.nxtQueen3 = this.prevQueen3;

    },
    prevfourQueen() {
     
      console.log("this will go prev");
      if(this.prevCtr === 1){
        this.btnPrev = true;
      }
      else{
       
        this.prevCtr -= 1;
        const moves = this.animateArray;
        var move = moves[this.prevCtr];
        console.log("This previous Queen");
        console.log(move);
        
        //var prev = 0
         if(move["col"] === 0){

              if(this.nxtQueen0 !== null){
                console.log(this.nxtQueen0);
                 this.removeQueen(move["col"], move["rowz"]);
                 this.prevQueen0 = (move["rowz"] === 0)? null: move["rowz"] -1;
              }
              
          }
          else if(move["col"] === 1){
               console.log(this.nxtQueen1);
              if(this.nxtQueen1 !== null){
                 this.removeQueen(move["col"], move["rowz"]);
                  this.prevQueen1 = (move["rowz"] === 0)? null: move["rowz"] -1;
             }
              
          }
          else if(move["col"] === 2){
             console.log(this.nxtQueen2);
              if(this.nxtQueen2 !== null){
                 this.removeQueen(move["col"], move["rowz"]);
                   this.prevQueen2 = (move["rowz"] === 0)? null: move["rowz"] -1;
             }
              
          }
          else if(move["col"] === 3){
            console.log(this.nxtQueen3);
              if(this.nxtQueen3 !== null){
                 this.removeQueen(move["col"], move["rowz"]);
                   this.prevQueen3 = (move["rowz"] === 0)? null:  move["rowz"] -1;
              }
              
          }
          if(move["rowz"] !== 0){
            this.addQueen(move["col"], move["rowz"]-1)
            console.log("this is the prev queen of prev")
            console.log(move["rowz"]-1)
          }else if(move["rowz"] === 1){

          }
          console.log("This was remove");
          console.log(move)
          // if(move["rowz"] > 0){
          //      this.addQueen(move["col"], move["rowz"])
          // }
          
          
          this.counter = this.prevCtr; 
       
        
      }
      
     
         
      
    },
    resetChessBoard() {},
    addQueen(row, col){
      var img = document.createElement("img");
      img.alt="Queen";
      img.id ="img"+col+row;
      img.src = "https://i.ibb.co/kMBQN3w/queen.png";
      var src = document.getElementById("td"+col+row);
      src.appendChild(img);
    },
    removeQueen( row, col){
       var image_x = document.getElementById("img"+col+row);
      image_x.parentNode.removeChild(image_x);
    }
  },
};
</script>