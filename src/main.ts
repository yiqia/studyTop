import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { key, store } from '@/store'

import '@fortawesome/fontawesome-free/css/all.min.css'
import 'normalize.css'

createApp(App).use(router).use(store, key).mount('#app')
