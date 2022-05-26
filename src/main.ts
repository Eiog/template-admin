import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router';
import 'uno.css'
import 'remixicon/fonts/remixicon.css'
import '@/assets/style/nprogress.css'
import App from './App.vue'
const app = createApp(App)
app.use(router).use(createPinia())
app.mount('#app')
