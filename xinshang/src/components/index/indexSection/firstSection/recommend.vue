<template>
    <!--推荐-->
    <div class="banner">
      <headerSwiper></headerSwiper>
      <index-list-nav></index-list-nav>
      <buyers></buyers>
    </div>

</template>

<script>
    import headerSwiper from "./indexList/headerSwiper";
    import IndexListNav from "./indexList/indexListNav";
    import Buyers from "./indexList/buyers";
    export default {
      // 推荐
        name: "recommend",
      components: {
        Buyers,
        IndexListNav,
        headerSwiper},
    }
</script>

<style lang="scss" scoped>

</style>
