<template>
  <div>
    <div id="controls">
      <button onclick="window.print()">Print this page</button>
      <button @click="printbill()">Print vue</button>
    </div>
    <div id="printMe" class="a4paper">
      <!-- Print area -->

      <shiplabel/>
      <hr class="dashed">
      
      <!-- <shiplabel/>
      <hr class="dashed"> 
       <div style="break-after:page"></div>   
      <shiplabel/>
       <hr class="dashed">       
      <shiplabel/> -->

      <!-- Print area end -->
    </div>
  </div>
</template>

<style scoped>
body {
  background: rgb(204, 204, 204);
}
.a4paper {
  background: white;
  display: block;
  margin: auto;
  margin-bottom: 0.5cm;
  box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
  width: 21cm;
  /* height: 29.7cm; */
  /* border-style: solid; */
  padding: 20px;
}
.hilight {
  border: 1px solid rgba(86, 61, 124, 0.2);
  background: rgba(86, 61, 124, 0.15);
}
.borderdiv {
  border: 1px solid rgb(8, 8, 8);
}
.hilight2 {
  border: 1px solid rgba(86, 61, 124, 0.2);
  background: rgba(245, 10, 182, 0.15);
}
table,
th,
td {
  border: 1px solid black;
}

table {
  width: 100%;
  border-collapse: collapse;
}
/* Dashed border */
hr.dashed {
  border-top: 3px dashed #bbb;
}
@media print {
  #controls {
    margin: 0;
    display: none;
  }
  .a4paper {
    box-shadow: none;
    padding: 0px;
  }
  /* .breakpage {page-break-before:always} */

}
</style>

<script>
import shiplabel from "../components/shiplabel"
export default {
  name: "blank",
  components: {
    shiplabel
  },
  data() {
    return {
      
    };
  },
  mounted() {},
  methods: {
    printbill() {
      this.$htmlToPaper("printMe");
    },
  },
};
</script>
