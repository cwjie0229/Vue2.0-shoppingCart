// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
Vue.use(VueRouter)


Vue.use(VueResource);
//1.定义组件，这里使用从其他文件import进来


import Nothing from './components/common/Nothing'
import addressp from './components/addressp/addressp'
import shoppingCart from './components/shoppingCart/shoppingCart'


//2.定义路由
const routes = [
  { path: '/addressp', component: addressp },
  { path: '/shoppingCart', component: shoppingCart },
]
//3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes
})
//4. 创建和挂载根实例。通过 router 配置参数注入路由，从而让整个应用都有路由功能
const app = new Vue({
      router,
      render: h => h(App)
}).$mount('#app')
