<template>

<q-page class=" row justify-center items-center">
    <q-btn @click="printbill()" color="primary" label="Print" />

      <q-card id="printMe" class="row justify-center q-pa-md" style="min-width: 820px;min-height: 1158px;margin:80px">        
        <div class="col-12 text-center self-center">
        <h2>My gooogle search</h2>
        <q-input outlined square v-model="text" class="input self-center" placeholder="my centered input">
          <template v-slot:append>

            <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer"></q-icon>
            <q-icon v-else name="search"></q-icon>
          </template>
        </q-input>
      </div>        
        </q-card>

  </q-page>

</template>


<script>
export default {
  name: 'invoiceGenerator',
  data: function () {
  return {
   
  }
},
methods:{
  printbill(){
          this.$htmlToPaper('printMe');

  }
}
}
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>