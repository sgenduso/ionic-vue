import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Ionic from '@ionic/vue';
import '../node_modules/@ionic/core/css/ionic.bundle.css';
import './theme/common.css';

Vue.use(Ionic);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
