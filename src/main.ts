import '@/assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '@/App.vue';
import router from '@/router';

const pinia = createPinia();
const myApp = createApp(App);

myApp.use(pinia);
myApp.use(router);
myApp.mount('#app');
