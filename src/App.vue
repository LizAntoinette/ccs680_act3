<template>
  <div id="app">
   <h1> Activity 3 </h1>
    <b-button variant="info" @click="csp" size="lg" pill class="mr-2"> CSP </b-button>
    <b-button variant="info" @click="genetic" size="lg" pill> Genetic Algorithm </b-button>
    <FourQueen v-if="cspView" />
  </div>
</template>

<script>
//mport Index from "./components/Index";
import FourQueen from "./components/FourQueen";
import Genetic from "./components/GeneticAlgorithm";
import {solve} from "./algorithms/geneticSample"
export default {
  name: "App",
  components: {
    FourQueen,
    Genetic, 
  },
  data() {
    return {
        cspView: false,
        geneticView:false,
    }},
   created: function () {
     solve()
   },

   methods: {
      csp(){
          this.cspView = !this.cspView;
          this.geneticView = false;
      },
      genetic(){
          this.geneticView =  !this.geneticView;
          this.cspView = false;

      }
   }
  
};
</script>

<style>
@import './assets/css/style.css';
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
