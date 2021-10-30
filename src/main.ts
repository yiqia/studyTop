import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { key, store } from '@/store'

import '@fortawesome/fontawesome-free/css/all.min.css'
// import axios from '@/utils/axios'

const app = createApp(App)
// app.config.globalProperties.$axios = axios

app.use(router).use(store, key).mount('#app')
