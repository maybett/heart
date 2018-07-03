<template>
  <div class="swiper-container" id="swiper5">
    <div class="swiper-wrapper">
      <div class="swiper-slide swiper1" v-for="p in pic">
        <a href="#">
          <img :src="p.picturl" alt="">
          <dl class="famlySwiperMini">
            <dd>私物分享</dd>
            <dt>第一只大牌包</dt>
            <dt>富有层次和质感的菱格纹设计，皮革穿插链条的迷人肩带，足以让无数少女为之心动。</dt>
          </dl>
        </a>
      </div>

    </div>
    <!--&lt;!&ndash; 如果需要分页器 &ndash;&gt;-->
    <div class="swiper-pagination" id="swiper5p"></div>

  </div>

</template>

<script>
    import Swiper from 'swiper'
    export default {
        name: "famlySwiyper",
      data(){
        return {
          pic:[
            {picturl:"./static/imgs/wb1.jpg"},
            {picturl:"./static/imgs/wb2.jpg"},
            {picturl:"./static/imgs/wb3.jpg"},
            {picturl:"./static/imgs/wb4.jpg"},
          ]
        }
      },
      mounted(){
        this.$nextTick(() => {
          new Swiper ('#swiper5',{
            direction: "horizontal",
            loop: true,
            autoplay: true,
            speed: 3000,
            autoplay: {
              delay: 3000
            },
            pagination: {
              el: "#swiper5p",
              type: "bullets"
            }
          })
        })
      }
    }
</script>

<style lang="scss" scoped>
  .swiper-container {
    width:100%;
    height: 1.85rem;
  }
  .swiper-wrapper{
    width:100%;
    height:100%;
  }
  .swiper1{
    position: relative;
    .famlySwiperMini{
      position: absolute;
      top:0;
      right:0;
      width:0.9rem;
      height:100%;
      background:rgba(74,74,74,0.5);
      line-height:0.15rem;
      padding:0.2rem 0.05rem;
      box-size:border-box;
      dd{
        font-size:0.14rem;
        color:#ffffff;
        line-height:0.24rem;
      }
      dt{
        font-size:0.1rem;
        color:#ffffff;
        line-height:0.16rem;
      }
    }
  }
  .swiper1 img{
    width:100%;
    height:100%;
  }
  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: -13px;
    left: 0;
    width: 100%;
  }
  .swiper-pagination-bullet-active{
    background:#ff483d;
  }
</style>

