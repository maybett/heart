<template>
    <div class="header">
      <i class="iconfont icon-jiantou-copy-copy"></i>
      <h2>CHANEL香奈儿</h2>
      <h3>...</h3>
    </div>
</template>

<script>
    export default {
        name: "ParticularsHeader"
    }
</script>

<style lang="scss" scoped >
    .header{
      width:100%;
      height:0.45rem;
      background:#fff;
      padding:0 0.10rem;
      box-sizing:border-box;
      display: -webkit-flex;
      justify-content: space-between;
      .iconfont{
        font-size: 0.25rem;
        color:#040504;
        line-height:0.45rem;
      }
      h2{
        font-size: 0.18rem;
        color:#040504;
        line-height: 0.45rem;
      }
      h3{
        font-size: 0.18rem;
        color:#040504;
        margin-top:0.05rem;
      }
    }
</style>
