import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/base.css'
import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.mount('#app')
