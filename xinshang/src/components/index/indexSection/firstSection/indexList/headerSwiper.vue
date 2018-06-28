<template>
  <div class="swiper-container" id="swiper1">
    <div class="swiper-wrapper">
      <div class="swiper-slide swiper1" v-for="p in pic">
        <a href="#">
          <img :src="p.picturl" alt="">
        </a>
      </div>

    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

  </div>
</template>

<script>
  import Swiper from 'swiper'

  export default {
        name: "headerSwiper",
        data(){
          return {
            pic:[
              {picturl:"./static/imgs/b1.jpg"},
              {picturl:"./static/imgs/b2.jpg"},
              {picturl:"./static/imgs/b3.jpg"},
              {picturl:"./static/imgs/b4.jpg"},


            ]
          }
        },
        mounted(){
          this.$nextTick(() => {
            new Swiper ('#swiper1',{
              direction: "horizontal",
              loop: true,
              autoplay: true,
              speed: 300,
              autoplay: {
                delay: 3000
              },
              pagination: {
                el: ".swiper-pagination",
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
