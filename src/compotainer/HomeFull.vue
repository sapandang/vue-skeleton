<template>
    <component v-bind:is="currentComponent"></component>
</template>

<style scoped></style>

<script>
import login from "../views/Login";
import invice1 from "../invoices/invoice1";
import blank from "../invoices/blank";
import invoice2 from "../invoices/invoice2";
import invoice3 from "../invoices/invoice3";
import invoice4 from "../invoices/invoice4";
import shiplabel1 from "../invoices/shiplabel1";

export default {
  name: "compfull",
  components: {
    login,
    invice1,
    blank,
    invoice2,
    invoice3,
    invoice4,
    shiplabel1
  },
  data() {
    return {
        currentComponent:login
    };
  },
  mounted(){
      if (this.$route.query.id != undefined) {
          this.currentComponent=this.$route.query.id;
    }
  }
};
</script>
