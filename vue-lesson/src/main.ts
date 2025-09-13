import { createApp } from 'vue'
import App from './App.vue'
import BaseIcon from '@/components/BaseIcon.vue'
import router from './router'
import './assets/main.css'
import 'animate.css';
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.component('BaseIcon', BaseIcon)
app.mount('#app')
