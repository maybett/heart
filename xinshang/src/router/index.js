import Vue from 'vue'
import Router from 'vue-router'
import particulars from '@/pages/particulars'
import cart from'@/pages/cart'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/particulars',
      name: 'particulars',
      component: particulars
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    }
  ]
})
