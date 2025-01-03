import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/app.css'
import { useDarkStore } from './stores/darkMode'
const pinia = createPinia()
const app = createApp(App)

// Initialize dark mode
const darkStore = useDarkStore(pinia);
darkStore.initializeDarkMode();


app.use(pinia)
app.use(router)
app.mount('#app')


