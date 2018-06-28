<template>
  <div class="cart">
    <cart-header></cart-header>
  </div>
</template>

<script>
    import CartHeader from "../components/cart/cart-header/CartHeader";
    export default {
        name: "cart",
      components: {CartHeader}
    }
</script>

<style lang="scss" scoped>
  .cart{
    background:#f7f7f7;
  }
</style>
