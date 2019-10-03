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
    },
    {
      path: '/buttons',
      name: 'buttons',
      component: () => import(/* webpackChunkName: "buttons" */ './vue/views/Buttons.vue'),
    },
    {
      path: '/colors',
      name: 'colors',
      component: () => import(/* webpackChunkName: "colors" */ './vue/views/Colors.vue'),
    },
    {
      path: '/grid',
      name: 'grid',
      component: () => import(/* webpackChunkName: "grid" */ './vue/views/Grid.vue'),
    },
    {
      path: '/form-elements',
      name: 'form-elements',
      component: () => import(/* webpackChunkName: "grid" */ './vue/views/FormElements.vue'),
    },
    {
      path: '/containers',
      name: 'containers',
      component: () => import(/* webpackChunkName: "containers" */ './vue/views/Containers.vue'),
    },
    {
      path: '/box-shadows',
      name: 'box-shadows',
      component: () => import(/* webpackChunkName: "box-shadows" */ './vue/views/Shadows.vue'),
    },
    {
      path: '/typography',
      name: 'typography',
      component: () => import(/* webpackChunkName: "typography" */ './vue/views/Typography.vue'),
    },
    {
      path: '/badges',
      name: 'badges',
      component: () => import(/* webpackChunkName: "badges" */ './vue/views/Badges.vue'),
    }
  ],
});
