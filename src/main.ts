import '@/assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '@/App.vue';
import router from '@/router';
import { VueQueryPlugin } from '@tanstack/vue-query';

const pinia = createPinia();
const myApp = createApp(App);

myApp.use(pinia);
myApp.use(router);

VueQueryPlugin.install( myApp, {
  queryClientConfig: {
    defaultOptions: {
        queries: {
            cacheTime: 1000 * 60, // 1 minuto
        }
    }
  } 
});

myApp.mount('#app');
