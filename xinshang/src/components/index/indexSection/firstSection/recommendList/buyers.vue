<template>
    <div class="buyers">
      <div class="buyersTitle">
        <h1>— 买活高手 —</h1>
        <h3>BUYRES’ZONE</h3>
      </div>
      <div class="buyersContent">
        <div class="buyersContentMini">
          <div class="buyersContentSwiper">
            <buyers-swiper></buyers-swiper>
          </div>
        </div>
        <div class="buyersList">
          <div class="buyersListMini">
            <div class="buyersListMiniT">
              <h1>全新闲置</h1>
              <p>买到就是赚到</p>
            </div>
            <div class="buyersListMiniB">
              <i class="iconfont icon-arrow-right"></i>
              <a href=""><img src="/static/imgs/wt1.jpg" alt=""></a>
            </div>
          </div>
          <div class="buyersListMini">
            <div class="buyersListMiniT">
              <h1>全新闲置</h1>
              <p>买到就是赚到</p>

            </div>
            <div class="buyersListMiniB">
              <i class="iconfont icon-arrow-right"></i>
              <a href=""><img src="/static/imgs/wt1.jpg" alt=""></a>
            </div>
          </div>
          <div class="buyersListMini">
            <div class="buyersListMiniT">
              <h1>全新闲置</h1>
              <p>买到就是赚到</p>
            </div>
            <div class="buyersListMiniB">
              <i class="iconfont icon-arrow-right"></i>
              <a href=""><img src="/static/imgs/wt1.jpg" alt=""></a>
            </div>
          </div>
          <div class="buyersListMini">
            <div class="buyersListMiniT">
              <h1>全新闲置</h1>
              <p>买到就是赚到</p>
            </div>
            <div class="buyersListMiniB">
              <i class="iconfont icon-arrow-right"></i>
              <a href=""><img src="/static/imgs/wt1.jpg" alt=""></a>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

  import buyersSwiper from "./buyersSwiper/buyersSwiper";
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
  .buyersList{
    padding:0.2rem 0.08rem 0;
    width:100%;
    box-sizing:border-box;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;

  }
.buyersListMini{
  width:49%;
  border:2px solid #f5f5f5;
  border-radius: 5px;
  box-sizing:border-box;
  padding:0.15rem 0.15rem 0.05rem;
  margin-top:5px;

}
  .buyersListMiniT{

    border-sizing:border-box;
    h1{
      font-size:0.18rem;
      color:#353a35;
      padding:0.05rem 0;
    }
    p{
      font-size:0.12rem;
      color:#a7a5a7;
      padding:0.05rem 0;
    }
  }
  .buyersListMiniB{
    display:flex;
    justify-content: space-between;
    align-items:center ;
    .iconfont{
      font-size:0.2rem;
      color:#a7a5a7;
    }
    img{
      width:100%;

    }

  }
</style>
