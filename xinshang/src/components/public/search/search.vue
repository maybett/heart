<template>
  <div class="search">
    <search-header></search-header>
    <search-filter></search-filter>
  </div>
</template>

<script>
  import searchHeader from './srarchHeader/searchHeader'
  import searchFilter from './searchFilter/searchFilter'
    export default {
      name: "search",
      components:{
        searchHeader,
        searchFilter
      }
    }
</script>

<style scoped lang="scss">
  .search{
    width: 100%;
    height: 100%;
    display: -webkit-flex;
    flex-direction: column;
    overflow-y: scroll;
    background: #f4f4f4;
  }
</style>
