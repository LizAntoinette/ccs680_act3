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
  </div>
</template>
<script>
export default {
  data() {
    return {
      chessboard: null,
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
  },
};
</script>