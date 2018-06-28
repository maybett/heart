<template>

  <div class="w-header">
    <i class="iconfont icon-soucha"></i>
    <div class="logo">
      <img src="../../../../static/imgs/logo.png" alt="">
    </div>
    <i class="iconfont icon-ziyuan"></i>
  </div>
</template>

<script>
    export default {
        name: "indexHeader"
    }
</script>

<style lang="scss" scoped >
  .w-header{
    height:0.4rem;
    display:flex;
    justify-content: space-between;
    padding:0 0.15rem;
    align-items: center;
    .iconfont{
      font-size:0.2rem;

    }
    .logo img{
      height:0.3rem;
    }
  }

</style>
