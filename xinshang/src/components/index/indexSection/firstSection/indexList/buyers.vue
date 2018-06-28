<template>
    <div class="buyers">
      <div class="buyersTitle">
        <h1>— 买活高手 —</h1>
        <h3>BUYRES’ZONE</h3>
      </div>
      <div class="buyersContent">
        <div class="buyersContentMini">
          <img src="" alt="">
          <div class="buyersContentSwiper">
            <buyersSwiper></buyersSwiper>
          </div>
        </div>
      </div>



    </div>
</template>

<script>

  import buyersSwiper from "./buyersSwiper";
  export default {
        name: "buyers",
    components: {
      buyersSwiper
    }
    }
</script>

<style lang="scss" scoped>
  .buyers{
    padding:0.15rem 0.1rem ;
    display:flex;
    flex-direction: column;

    .buyersTitle{
      text-align: center;
      h1{
        font-size:0.14rem;
        color:#3d3e3d;
        line-height:0.24rem;
      }
      h3{
        font-size:0.08rem;
        color:#3d3e3d;
        line-height:0.24rem;
      }
    }
  }

</style>
