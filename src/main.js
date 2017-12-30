import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import App from './App.vue';
import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';
import ExamplePage from './pages/ExamplePage.vue';
import TestPage from './pages/TestPage.vue';
import LoginPage from './LoginPage.vue';
import StaticDesigner from './pages/StaticDesigner.vue';



const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
  },
  {
    path: '/test1',
    name: 'test1',
    component: TestPage,
  },
  {
    path: '/examples',
    name: 'examples',
    component: ExamplePage,
  },
  {
    path: '/SDesign',
    name: 'SDesign',
    component: StaticDesigner,
  },
  {
    path: '*',
    redirect: {
      name: 'home',
    },
  },
];
var router = new VueRouter({
  routes,
  root: '/home',
});

Vue.use(Vuetify);
Vue.use(VueRouter);


new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  render: h => h(App),
});
