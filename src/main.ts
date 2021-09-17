import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

import '@fortawesome/fontawesome-free/css/all.min.css'

createApp(App).use(router).mount('#app')
