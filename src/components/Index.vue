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

      <b-button class="mr-2" size="sm" :disabled="btnPrev">Previous</b-button>
      <b-button class="mr-2" size="sm"  :disabled="btnNext">Next</b-button>
    </div>
  </div>
</template>
<script>
import { fourQueen } from "../algorithms/fourQueens";

export default {
  data() {
    return {
      chessboard: null,
      animateArray: [],
      btnNext: true,
      btnPrev: true,
      btnReset: true,
      btnStart: false,
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
      for (let i = 1; i <= 4; i++) {
        let currentRow = [];
        for (let j = 1; j <= 4; j++) {
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
      this.animateArray = fourQueen();
      this.btnNext = false;
      this.btnStart = true;
      console.log(this.$refs.td11)
      var img = document.createElement("img");
      img.alt="Queen";
      img.src = "https://i.ibb.co/kMBQN3w/queen.png";
      var src = document.getElementById("td11");
      src.appendChild(img);
    
      
    },
    nextfourQueen() {

    },
    prevfourQueen() {},
    resetChessBoard() {},
 
  },
};
</script>