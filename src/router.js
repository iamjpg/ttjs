import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import(/* webpackChunkName: "main" */ './vue/views/Main.vue'),
    },
    {
      path: '/installation',
      name: 'installation',
      component: () => import(/* webpackChunkName: "installation" */ './vue/views/Installation.vue'),
    },
    {
      path: '/framework-integration',
      name: 'framework-integration',
      component: () => import(/* webpackChunkName: "framework-integration" */ './vue/views/Framework-Integration.vue'),
    }
  ],
});
