<template>
    <div class="sort">
      <ul>
        <li class="select">默认<i class="iconfont icon-right-1"></i></li>
        <li>最新<i class="iconfont icon-right-1"></i></li>
        <li>价格由高到低<i class="iconfont icon-right-1"></i></li>
        <li>价格由低到高<i class="iconfont icon-right-1"></i></li>
        <li>人气排序<i class="iconfont icon-right-1"></i></li>
      </ul>
    </div>
</template>

<script>
    export default {
      name: "sort",
      data() {
        return {
          sortItems:[
            ''
          ],
        }
      }
    }
</script>

<style scoped lang="scss">
  .sort{
    width: 100%;
    height: 2.1rem;
    background: #fff;
    >ul{
      width: 100%;
      height: 100%;
      >li{
        height: 20%;
        box-sizing: border-box;
        border-top: 1px solid #f3f3f3;
        width: 100%;
        text-align: center;
        font-size: 0.12rem;
        line-height: 0.42rem;
        position: relative;
        >i{
          position: absolute;
          top: 0;
          bottom: 0;
          margin: auto 0;
          right: 0.4rem;
          font-size: 0.20rem;
        }
      }
      >.select{
        color: #fb2c22;
      }
    }
  }
</style>
