<template>
    
<div style="border-style: solid;">
  <!-- Title -->
      <div class="row">
        <div class="col borderdiv">
          <div class="text-h4"><i>Shipping Dost Courier Services</i></div>
        </div>
      </div>

      <!-- second row  -->
      <div class="row">
        <div class="col borderdiv" style="text-align: left;padding:5px">
          <b> Deliver To:</b> <br />
          Slate Rock and Gravel Company <br />
          222 Rocky Way <br />
          30000 Bedrock, Cobblestone County <br />
          +555 7 123-5555 <br />
          fred@slaterockgravel.bed <br />
          Attn: Fred Flintstone <br />
        </div>
        <div class="col borderdiv" style="text-align: center;padding:5px">
          <img
            src="https://www.investopedia.com/thmb/ZG1jKEKttKbiHi0EkM8yJCJp6TU=/1148x1148/filters:no_upscale():max_bytes(150000):strip_icc()/qr-code-bc94057f452f4806af70fd34540f72ad.png"
            alt="Girl in a jacket"
            width="100"
            height="100"
          />
          <br />
         <b> TrackingNo. 12346787565677657 </b>
        </div>
        <div class="col borderdiv" style="text-align: right;padding:5px">
          <b> From: </b> <br />
          Ionox software <br />
          222 Rocky Way <br />
          30000 Bedrock, Cobblestone County <br />
          +555 7 123-5555 <br />
          fred@slaterockgravel.bed <br />
          Attn: Fred Flintstone <br />
        </div>
      </div>

      <!-- third row -->
      <div class="row">
        <div class="col borderdiv" style="padding:1px">
          <div class="text-h7"><b>CASH ON DELIVERY</b></div>
          <div class="text-h7"><b>COLLECT CASH : Rs.987/-</b></div>
        </div>
      </div>
      <!-- forth row -->
      <div class="row">
        <div class="col borderdiv" style="padding: 5px;">
          <table>
            <tr>
              <th>Item</th>
              <th>Value</th>
            </tr>
            <tr>
              <td>Simmtronics SIMMDDR2-9 2GB 667 MHz DDR2 Desktop RAM | B00OKDNK82 ( SIMMTRONICS 2GB DDR2 667 MHZ DESKTOP RAM )</td>
              <td>₹483.05</td>
            </tr>
            <tr>
              <td>Samsung Galaxy M31 (Ocean Blue, 6GB RAM, 128GB Storage)</td>
              <td>₹16,499</td>
            </tr>
          </table>
        </div>
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
    name:"shiplabel"
}
</script>