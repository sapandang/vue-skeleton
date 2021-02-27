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

      <!-- ItemRow -->
      <div class="row">
          <div class="col hilight">
            <q-table
      title="Treats"
      dense
      :data="data"
      :columns="columns"
      row-key="name"
    />
          </div>
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
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Dessert (100g serving)',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
        { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
        { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
        { name: 'protein', label: 'Protein (g)', field: 'protein' },
        { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
        { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ],
      data: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: '8%',
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: '6%',
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: '3%',
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: '7%',
          iron: '16%'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          sodium: 50,
          calcium: '0%',
          iron: '0%'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          sodium: 38,
          calcium: '0%',
          iron: '2%'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          sodium: 562,
          calcium: '0%',
          iron: '45%'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          sodium: 326,
          calcium: '2%',
          iron: '22%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54,
          calcium: '12%',
          iron: '6%'
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
