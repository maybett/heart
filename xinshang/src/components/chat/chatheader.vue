<template>
  <header>
    <h1>消息</h1>
    <i class="iconfont icon-ziyuan"></i>
  </header>
</template>

<script>
    export default {
        name: "chatheader"
    }
</script>

<style scoped>
header{
  width: 100%;
  height: 1.45rem;
  background: #fff;
  display: flex;
  justify-content:space-between ;

}
header h1{
  font-size: 28px;
  color: #474747;
  height: 1.45rem;
  line-height: 1.45rem;
  padding-left: 0.2rem;
}
header i{
  font-size: 20px;
  color: #474747;
  padding-right: 0.2rem;
  padding-top: 0.1rem;
}
</style>
