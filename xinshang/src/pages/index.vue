<template>
  <div class="box">
    <indexHeader></indexHeader>
    <index-nav></index-nav>
    <index-section></index-section>
  </div>
</template>

<script>
  import indexHeader from "../components/index/indexHeader/indexHeader";
  import IndexNav from "../components/index/indexNav/indexNav";
  import IndexSection from "../components/index/indexSection/indexSection";

  export default {
        name: "index",
        components:{
          IndexSection,
          IndexNav,
          indexHeader}
    }
</script>

<style scoped>

</style>
