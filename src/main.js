import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// boostrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
// router
import { router} from './router'

createApp(App).use(router).mount('#app')
