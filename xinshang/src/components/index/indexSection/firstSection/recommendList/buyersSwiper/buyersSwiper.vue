<template>
  <div class="swiper-container" id="swiper2">
    <div class="swiper-wrapper">
      <!--<div class="swiper-slide swiper1" v-for="p in pic">-->
        <!--<a href="#">-->
          <!--<img :src="p.picturl" alt="">-->
        <!--</a>-->
      <!--</div>-->
      <div class="swiper-slide">
        <div class="buyersBox">
          <a href="#">
            <img src="/static/imgs/wbuy1.jpg" alt="">
          </a>

          <div class="buyersServe">
            <h1>轻奢品牌</h1>
          </div>
        </div>

      </div>
      <div class="swiper-slide">
        <div class="buyersBox">
          <a href="#">
            <img src="/static/imgs/wbuy1.jpg" alt="">
          </a>

          <div class="buyersServe">
            <h1>轻奢品牌</h1>
          </div>
        </div>

      </div>
      <div class="swiper-slide">
        <div class="buyersBox">
          <a href="#">
            <img src="/static/imgs/wbuy1.jpg" alt="">
          </a>

          <div class="buyersServe">
            <h1>轻奢品牌</h1>
          </div>
        </div>

      </div>
      <div class="swiper-slide">
        <div class="buyersBox">
          <a href="#">
            <img src="/static/imgs/wbuy1.jpg" alt="">
          </a>

          <div class="buyersServe">
            <h1>轻奢品牌</h1>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'

  export default {
        name: "buyersSwiper",
    data(){
      return {
        // pic:[
        //   {picturl:"./static/imgs/wb1.jpg"},
        //   {picturl:"./static/imgs/wb2.jpg"},
        //   {picturl:"./static/imgs/wb3.jpg"},
        //   {picturl:"./static/imgs/wb4.jpg"},
        //
        //
        // ]
      }
    },
    mounted(){
      this.$nextTick(() => {
        new Swiper ('#swiper2',{
          direction: "horizontal",
          slidesPerView : 2.5,
          spaceBetween : 20,

        })
      })
    }
    }
</script>

<style lang="scss" scoped>
  .buyersBox{
    width:1.3rem;
    height:1.45rem;
    position:relative;
    border-radius: 0.05rem;
    img{
      width:1.3rem;
      height:1.45rem;
      border-radius: 0.05rem;

    }
    .buyersServe{
      width:100%;
      height:0.3rem;
      background:rgba(255,255,255,.6);
      position:absolute;
      left:0;
      bottom:0;
      text-align: center;
      h1{
        line-height:0.3rem;
        font-size:0.12rem;
        color:#262726;
      }
    }
  }
</style>
