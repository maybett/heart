import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import particulars from '@/pages/particulars'
import cart from'@/pages/cart'
import index from '@/pages/index'
import suggest from '../components/index/indexSection/firstSection/recommend'
import bags from '../components/index/indexSection/firstSection/bags'
import watch from '../components/index/indexSection/firstSection/watch'
import clothing from '../components/index/indexSection/firstSection/clothing'
import acces from '../components/index/indexSection/firstSection/acces'
import jewelry from '../components/index/indexSection/firstSection/jewelry'
=======
import classfly from '../pages/classfly'
import JiaHao from '../pages/JiaHao'
import JiMai from '../pages/JiMai'
import FaBu from '../pages/FaBu'
import lv from '../pages/lv'
>>>>>>> hk


Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/classfly/',
      name: 'classfly',
      component: classfly,
    },
    {
      path: '/JiaHao/',
      name: 'JiaHao',
      component: JiaHao,
    },
    {
      path: '/JiMai/',
      name: 'JiMai',
      component: JiMai,
    },
    {
      path: '/FaBu/',
      name: 'FaBu',
      component: FaBu,
    },
    {
      path: '/lv/',
      name: 'lv',
      component: lv,
    }
<<<<<<< HEAD
      path: '/',
      name: 'index',
      component: index,
      children:[
        {
          path: '/',
          name:'suggest',
          component:suggest,

        },
        {
          path: '/bags',
          name:'bags',
          component:bags,

        },
        {
          path: '/watch',
          name:'watch',
          component:watch,

        },
        {
          path: '/clothing',
          name:'clothing',
          component:clothing,

        },
        {
          path: '/acces',
          name:'acces',
          component:acces,

        },
        {
          path: '/jewelry',
          name:'jewelry',
          component:jewelry,

        },
      ],
    },

  ]
=======
  ],

>>>>>>> hk
})
