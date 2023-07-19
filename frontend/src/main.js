import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

const pinia = createPinia()

createApp(App).use(store).use(router).use(pinia).mount('#app')
