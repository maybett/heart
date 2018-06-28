<template>
    <div class="searchFilter">
      <ul>
        <li>
          默认<i class="iconfont icon-arrow-down"></i>
        </li>
        <li>
          品牌<i class="iconfont icon-arrow-down"></i>
        </li>
        <li>
          分类<i class="iconfont icon-arrow-down"></i>
        </li>
        <li>
          筛选<i class="iconfont icon-Path"></i>
        </li>
      </ul>
      <sort v-show="false"></sort>
    </div>
</template>

<script>
  import sort from './searchFilterItems/sort'
    export default {
        name: "searchFilter",
      components:{
          sort
      }
    }
</script>

<style scoped lang="scss">
  .searchFilter{
    width: 100%;
    height: 0.38rem;
    background: #fff;
    border-top: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    >ul{
      width: 100%;
      height: 100%;
      display: flex;
      >li{
        flex: 1;
        height: 100%;
        font-size: 0.12rem;
        color: #6d6d6d;
        text-align: center;
        line-height: 0.38rem;
        i{
          display: inline-block;
          margin-left: 0.05rem;
        }
      }
    }
  }
</style>
