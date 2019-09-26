import Vue from 'vue';
import App from './App.vue';

Vue.config.ignoredElements = [/platypus-\w*/];

new Vue({
  render: (h) => h(App),
}).$mount('#app');
