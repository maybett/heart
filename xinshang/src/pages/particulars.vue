<template>
  <div class="part">
      <particulars-header></particulars-header>
    <div class="section">
      <particular-banner></particular-banner>
      <particular-details></particular-details>
    </div>
    <particular-footer></particular-footer>
  </div>

</template>

<script>
  import ParticularsHeader from "../components/particulars/particulars-header/ParticularsHeader";
  import ParticularBanner from "../components/particulars/particular-banner/ParticularBanner";
  import ParticularDetails from "../components/particulars/particulars-details/ParticularDetails";
  import ParticularFooter from "../components/particulars/particular-footer/ParticularFooter";
    export default {
        name: "particulars",
        components: {ParticularFooter, ParticularDetails, ParticularBanner, ParticularsHeader}
    }
</script>

<style lang="scss" scoped>
    .part{
      width:100%;
      height:100%;
      display: -webkit-flex;
      flex-direction: column;
    }
    .section{
      overflow-y: scroll;
      -webkit-flex: 1;
      width:100%;
      overflow-x: hidden;
    }
</style>



