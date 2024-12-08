import './assets/main.css'
import "./tailwind.css"
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';
import { faArrowRight, faBars, faHouse, faPlay, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
library.add(faBars, faPlay, faHouse, faArrowRight, faArrowLeft)

createApp(App)
.use(router)
.use(ToastPlugin)
.component('font-awesome-icon', FontAwesomeIcon)
.use(createPinia())
.mount('#app');


