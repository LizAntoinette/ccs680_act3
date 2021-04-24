<template>
  <div>
    <div>
      <table class="table-bordered">
        <tbody>
          <tr v-for="items in chessboard">
            <td
              v-for="elements in items"
              :key="elements.id"
              :class="elements.class"
              height="95px"
              width="90px"
            ></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mt-3">
     
        <b-button class="mr-2" size="sm">Reset</b-button>
        <b-button class="mr-2" size="sm">Start</b-button>
        
        <b-button class="mr-2"size="sm">Previous</b-button>
        <b-button class="mr-2"size="sm">Next</b-button>
  
    </div>
  </div>
</template>
<script>
import {fourQueen} from '../algorithms/fourQueens';

export default {
  data() {
    return {
      chessboard: null,
      animateArray: [],
      btnNext: false, 
      btnPrev: false
    };
  },
  created: function () {
    this.createChessBoard();
    
  },
  methods: {
    createChessBoard() {
      this.chessboard = [];
      for (let i = 1; i <= 4; i++) {
        let currentRow = [];
        for (let j = 1; j <= 4; j++) {
          if ((j % 2 == 0 && i % 2 == 0) || (j % 2 != 0 && i % 2 != 0)) {
            currentRow.push({ id: "" + i + "" + j, class: "black" });
          } else {
            currentRow.push({ id: "" + i + "" + j, class: "white" });
          }
        }
        this.chessboard.push(currentRow);
      }
      console.log(this.chessboard);
    },
    startforQueen(){
      this.animateArray = fourQueen();
      this.btnNext = true;
      this.btnPrev = true;
    }, 
    nextfourQueen(){

    },
    prevfourQueen(){

    }
  },
};
</script>