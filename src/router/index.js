import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/home/index.vue'
import productxq  from '@/components/home/productxq.vue'
import productxqDetail  from '@/components/home/productxqDetail.vue'
import xmxq  from '@/components/home/xmxq.vue'
import xmxqDetail  from '@/components/home/xmxqDetail.vue'
import jsxqDetail  from '@/components/home/jsxqDetail.vue'
import jsxq  from '@/components/home/jsxq.vue'
import jsxqDetail2  from '@/components/home/xmxqDetail2.vue'

import tzsj  from '@/components/home/tzsj.vue'

import rzsj  from '@/components/home/rzsj.vue'
import trz  from '@/components/home/trz.vue'

import qtxq  from '@/components/home/qtxq.vue'
import qtxuDetail  from '@/components/home/qtxqDetail.vue'


import shengproductxq  from '@/components/home/shengproductxq.vue'
import shengproductxqDetail  from '@/components/home/shengproductxqDetail.vue'
import shengxmxq  from '@/components/home/shengxmxq.vue'
import shengxmxqDetail  from '@/components/home/shengxmxqDetail.vue'
import shengjsxqDetail  from '@/components/home/shengjsxqDetail.vue'
import shengjsxq  from '@/components/home/shengjsxq.vue' 
import shengtzsj  from '@/components/home/shengtzsj.vue' 
import shengqtxuDetail  from '@/components/home/shengqtxqDetail.vue'
import user  from '@/components/home/user.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/shengtzsj',
      name: 'shengtzsj',
      component: shengtzsj
    }, {
      path: '/shengqtxuDetail',
      name: 'shengqtxuDetail',
      component: shengqtxuDetail
    },
    {
      path: '/shengjsxq',
      name: 'shengjsxq',
      component: shengjsxq
    }, {
      path: '/shengjsxqDetail',
      name: 'shengjsxqDetail',
      component: shengjsxqDetail
    },
    {
      path: '/shengproductxqDetail',
      name: 'shengproductxqDetail',
      component: shengproductxqDetail
    }, {
      path: '/shengproductxq',
      name: 'shengproductxq',
      component: shengproductxq
    },
    {
      path: '/shengxmxq',
      name: 'shengxmxq',
      component: shengxmxq
    }, {
      path: '/shengxmxqDetail',
      name: 'shengxmxqDetail',
      component: shengxmxqDetail
    },
     
    {
      path: '/tzsj',
      name: 'tzsj',
      component: tzsj
    },
    {
      path: '/qtxq',
      name: 'qtxq',
      component: qtxq
    },
    {
      path: '/qtxuDetail',
      name: 'qtxuDetail',
      component: qtxuDetail
    },
    {
      path: '/rzsj',
      name: 'rzsj',
      component: rzsj
    },
    {
      path: '/trz',
      name: 'trz',
      component: trz
    },
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/productxq',
      name: 'productxq',
      component: productxq
    },{
      path: '/xmxq',
      name: 'xmxq',
      component: xmxq
    },{
      path: '/xmxqDetail',
      name: 'xmxqDetail',
      component: xmxqDetail
    },{
      path: '/productxqDetail',
      name: 'productxqDetail',
      component: productxqDetail
    } ,{
      path: '/jsxqDetail',
      name: 'jsxqDetail',
      component: jsxqDetail
    },{
      path: '/jsxq',
      name: 'jsxq',
      component: jsxq
    },{
      path: '/jsxqDetail2',
      name: 'jsxqDetail2',
      component: jsxqDetail2
    }


    

    
    
  ]
})
