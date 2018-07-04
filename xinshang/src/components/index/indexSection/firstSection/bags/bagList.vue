<template>
    <div class="bagList">
      <div class="bagListmini" v-for="b in bList">
        <a href="">
          <div class="bagListminiImg">
            <img :src="b.bagImg" alt="">
          </div>
          <p class="p1">
            <span class="s1">{{b.news}}</span>
            <span class="s2">{{b.title}}</span>
          </p>
          <p class="p2">
            <span class="s3">￥{{b.newPrice}}</span>
            <span class="s4">￥{{b.oldPrice}}</span>
          </p>
          <i class="iconfont icon-xin-copy"></i>
        </a>
      </div>

    </div>
</template>
<script>
    export default {
        name: "bagList",
      data(){
        return{
          bList:[
            {bagImg:"./static/imgs/wbag1.jpg",news:'【9成新】',title:'Louis Vuitton',newPrice:8888,oldPrice:10000},
            {bagImg:"./static/imgs/wbag2.jpg",news:'【8成新】',title:'ZENITH',newPrice:6888,oldPrice:9988},
            {bagImg:"./static/imgs/wbag1.jpg",news:'【9成新】',title:'LONGINES',newPrice:7867,oldPrice:9888},
            {bagImg:"./static/imgs/wbag1.jpg",news:'【9成新】',title:'ZENITH',newPrice:6800,oldPrice:9988},

          ]
        }
      }
    }
</script>

<style lang="scss" scoped>
  .bagList{
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
  .bagListmini{
    width:49%;
    display: flex;
    flex-direction: column;
    position: relative;
    padding-bottom:0.3rem;
    margin-bottom: 0.05rem;
    background:#ffffff;
      .bagListminiImg img{
        width:100%;
        height:1.65rem;
      }
    .p1 {
      display:flex;

      .s1 {
        font-size:0.12rem;
        color:#252825;
        line-height:0.24rem;
        font-weight: 900;
      }
      .s2 {
        font-weight:900;
        font-size:0.1rem;
        color:#535353;
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


  }


</style>
