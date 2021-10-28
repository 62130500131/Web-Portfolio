import { createApp } from 'vue'
import App from './App.vue'
import Main from './components/Main.vue'
import Navbar from './components/Navbar.vue'

const app = createApp(App)

app.component('Navbar',Navbar)
app.component('Main',Main)

app.mount('#app')
