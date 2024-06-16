import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css'
import './main.scss';

const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options:{
            prefix:'p',
            darkModeSelector: 'system',
            cssLayer: false,
        }
    }
});
app.use(router);
app.mount('#app');
