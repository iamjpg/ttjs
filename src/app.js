import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.ignoredElements = [/tt-\w*/];

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
