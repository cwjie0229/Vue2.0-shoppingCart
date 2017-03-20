// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
Vue.use(VueRouter)


Vue.use(VueResource);
//1.�������������ʹ�ô������ļ�import����


import Nothing from './components/common/Nothing'
import addressp from './components/addressp/addressp'
import shoppingCart from './components/shoppingCart/shoppingCart'


//2.����·��
const routes = [
  { path: '/addressp', component: addressp },
  { path: '/shoppingCart', component: shoppingCart },
]
//3. ���� router ʵ����Ȼ�� `routes` ����
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes
})
//4. �����͹��ظ�ʵ����ͨ�� router ���ò���ע��·�ɣ��Ӷ�������Ӧ�ö���·�ɹ���
const app = new Vue({
      router,
      render: h => h(App)
}).$mount('#app')
