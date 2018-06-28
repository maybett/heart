<template>
  <ul class="list">
    <li>推荐</li>
    <li>箱包</li>
    <li>手表</li>
    <li>服装</li>
    <li>配饰</li>
    <li>首饰</li>
    <li>鞋靴</li>
    <li>配件</li>
    <li>服装</li>

  </ul>
</template>

<script>
    export default {
        name: "indexNav"
    }
</script>

<style scoped lang="scss">
  .list{
    display:flex;
    justify-content: space-between;
    padding:0 0.15rem;
    overflow: auto;
  }
  /*.list::-webkit-scrollbar {*/
    /*display: none;*/
  /*}*/
  .list li{
    padding:0.14rem 0.15rem 0.1rem;
    font-size:0.14rem;
    flex-shrink: 0;
  }

</style>
