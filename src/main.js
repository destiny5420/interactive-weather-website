import Vue from 'vue';
import App from '@/views/vApp/index.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
