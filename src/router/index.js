import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)


// Pages

import Home from '@/pages/Home.vue'
import Shop from '@/pages/Shop.vue'
import NotFound from '@/pages/404.vue'
import Product from '@/pages/Product.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
},
{
    path: '/shop',
    name: 'shop',
    component: Shop
},
{
    path: '*',
    name: 'NotFound',
    component: NotFound
},
{
    path: '/shop/:id',
    name: 'product',
    component: Product
},

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
