<template>
  <div class="brandsBox">
    <div class="swiper-container" id="swiper3">
      <div class="swiper-wrapper">
        <div class="swiper-slide swiper1" v-for="p in pic">
          <a href="#">
            <img :src="p.picturl" alt="">
            <div class="brandsServe">
              <h1>轻奢品牌</h1>
            </div>
          </a>

        </div>


      </div>
    </div>
  </div>

</template>

<script>
  import Swiper from 'swiper'

  export default {
    name: "brandsSwiper",
    data(){
      return {
        pic:[
          {picturl:"./static/imgs/wp1.jpg"},
          {picturl:"./static/imgs/wp2.jpg"},
          {picturl:"./static/imgs/wp1.jpg"},
          {picturl:"./static/imgs/wp2.jpg"},


        ]
      }
    },
    mounted(){
      this.$nextTick(() => {
        new Swiper ('#swiper3',{
          direction: "horizontal",
          slidesPerView : 4.5,
          spaceBetween : 15,

        })
      })
    }
  }
</script>

<style lang="scss" scoped>
  .brandsBox{
    /*width:100%;*/
    height:0.7rem;
    border-radius: 0.05rem;
    padding:0 0.1rem;
    box-sizing: border-box;
    img{
      width:0.5rem;
      height:0.5rem;
      border-radius: 5px;

    }
    .brandsServe{
      /*width:100%;*/
      height:0.3rem;
      background:rgba(255,255,255,.6);

      text-align: center;
      h1{
        line-height:0.2rem;
        font-size:0.1rem;
        color:#262726;
      }
    }
  }
</style>
