import Vue from 'vue'
import Router from 'vue-router'
import chat from '@/pages/chat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/chat',
      name: 'chat',
      component: chat
    }
  ]
})
