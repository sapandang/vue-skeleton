<template>
  <div>
    <div id="controls">
      <button onclick="window.print()">Print this page</button>
      <button @click="printbill()">Print vue</button>
    </div>
    <div id="printMe" class="a4paper">
      <!-- Print area -->

      <!-- Title -->
      <div class="row">
        <div class="col hilight">
          <div class="text-h3">Invoice Generator</div>
        </div>
      </div>

      <!-- Second Row -->
      <div class="row">
        <!-- logo -->
        <div class="col-2 hilight">
          <img
            src="https://www.ionoxsoftware.in/wp-content/themes/IONOX/img/4.png"
            alt="Girl in a jacket"
            width="100"
            height="100"
          />
        </div>
        <!-- company address -->
        <div class="col hilight">
          <div>
            Ionox Software Pvt. Ltd. <br />
            Registered Office: 204/B, Biraja Complex, <br />
            Plot No.1171/1841, Cuttack Road, <br />
            Bomikhal, Bhubaneswar <br />
          </div>
        </div>
      </div>

      <!-- Third Row -->
      <div class="row">
        <div class="col-3 hilight">
          issue date: 12/21/21 <br />
          due date: 12/21/21 <br />
          GSTNumber: 324324 23423 <br />
          Invoice Number: #qweqwe <br />
        </div>
        <div class="col hilight" style="text-align: right;">
          <b> Bill To:</b> <br>
          Slate Rock and Gravel Company <br />
          222 Rocky Way <br />
          30000 Bedrock, Cobblestone County <br />
          +555 7 123-5555 <br />
          fred@slaterockgravel.bed <br />
          Attn: Fred Flintstone <br />
        </div>
      </div>

      <!-- Table Header -->
      <div class="row">
        <template v-for="(item,index) in columns">
          <div :key="index" class="col hilight">
            {{item}}            
          </div>
        </template>
      </div>
       <!-- Table Item -->
       <div class="row">
        <template v-for="(item) in data">
          <template v-for="(itemobj,index) in item">
          <div :key="index" class="col hilight">
            {{itemobj}}            
          </div>
          </template>
        </template>
      </div>



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
  height: 29.7cm;
  /* border-style: solid; */
  padding: 20px;
}
.hilight {
  border: 1px solid rgba(86, 61, 124, 0.2);
  background: rgba(86, 61, 124, 0.15);
}
.hilight2 {
  border: 1px solid rgba(86, 61, 124, 0.2);
  background: rgba(245, 10, 182, 0.15);
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
}
</style>

<script>
export default {
  name: "blank",
  components: {},
  data () {
    return {
     columns:[
       "itemName",
       "Unit Price",
       "Discount",
       "Quantity",
       "Net Amount",
       "Tax Rate",
       "Tax Type",
       "Tax Amount",
       "Total Amount"       
     ],
     data:[
       {
        "itemName": "Simmtronics SIMMDDR2-9 2GB 667 MHz DDR2 Desktop RAM | B00OKDNK82 ( SIMMTRONICS 2GB DDR2 667 MHZ DESKTOP RAM )",
       "Unit Price": "₹483.05",
       "Discount": "",
       "Quantity":" ",
       "Net Amount":" ",
       "Tax Rate":"",
       "Tax Type":"",
       "Tax Amount":"",
       "Total Amount":""  
       }
     ]
    }
  },
  mounted() {},
  methods: {
    printbill() {
      this.$htmlToPaper("printMe");
    },
  },
};
</script>
