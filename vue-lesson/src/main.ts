import { createApp } from 'vue'
import App from './App.vue'
import BaseIcon from '@/components/BaseIcon.vue'
import './assets/main.css'
import 'animate.css';

createApp(App).component('BaseIcon', BaseIcon).mount('#app')
