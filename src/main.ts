import { createApp } from 'vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import App from './App.vue'
import initializeRouter from './router'
import './styles/main.css'

const app = createApp(App)

app.use(Toast)
initializeRouter(app)

app.mount('#app')
