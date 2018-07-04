<template>
  <div class="clothingList">
    <div class="clothingMini" v-for="wList in clothingL">
      <a href="">
        <div class="clothingMiniImg">
          <img :src="wList.clothingImg" alt="">
        </div>
        <p class="p1">
          <span class="s1">{{wList.news}}</span>
          <span class="s2">{{wList.title}}</span>
        </p>
        <p class="p2">
          <span class="s3">￥{{wList.newPrice}}</span>
          <span class="s4">￥{{wList.oldPrice}}</span>
        </p>
      </a>
      <i class="iconfont icon-xin-copy" @touchstart="touch"></i>
      <div class="redheart" v-show="or_show">
        <i class="iconfont icon-xin"></i>
        <!--<img src="" alt="">-->
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: "clothingList",
    data(){
      return{
        or_show:false,
        clothingL:[
          {clothingImg:"./static/imgs/wwat1.jpg",news:'【9成新】',title:'Louis Vuitton',newPrice:8888,oldPrice:10000},
          {clothingImg:"./static/imgs/wwat2.jpg",news:'【8成新】',title:'ZENITH',newPrice:6888,oldPrice:9988},
          {clothingImg:"./static/imgs/wwat3.jpg",news:'【9成新】',title:'LONGINES',newPrice:7867,oldPrice:9888},
          {clothingImg:"./static/imgs/wwat4.jpg",news:'【9成新】',title:'ZENITH',newPrice:6800,oldPrice:9988},

        ]
      }
    },
    methods:{
      touch(ev){
        var o = ev.target;
        this.or_show = !this.or_show;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .clothingList{
    span{
      display: block;
    }
    width:100%;
    padding:0.1rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background:#f7f7f7;
  }
  .clothingMini{
    width:49%;
    display: flex;
    flex-direction: column;
    position: relative;
    padding-bottom:0.3rem;
    margin-bottom: 0.05rem;
    background:#ffffff;
    .clothingMiniImg img{
      width:100%;
      height:1.65rem;
    }
    .p1 {
      display:flex;

      .s1 {
        font-size:0.12rem;
        color:#252825;
        line-height:0.24rem;
        font-weight:900;
      }
      .s2 {
        font-size:0.1rem;
        color:#454545;
        font-weight:900;

        line-height:0.24rem;
        margin-left:4px;
      }
    }
    .p2 {
      display:flex;
      .s3 {
        font-size:0.16rem;
        color:#0a0a0a;
        line-height:0.26rem;
      }
      .s4 {
        font-size:0.08rem;
        color:#bab8ba;
        line-height:0.26rem;
        text-decoration: line-through;
        margin-left:4px;
      }
    }
    .iconfont{
      font-size:0.2rem;
      line-height:0.26rem;
      position: absolute;
      right:0.1rem;
      bottom:0.1rem;

    }
    .redheart{
      font-size:0.2rem;
      line-height:0.26rem;
      position: absolute;
      right:0.01rem;
      bottom:0.01rem;
    }


  }


</style>
