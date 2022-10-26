import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import { useBreakpoints } from "./plugins/breakpoints";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import '../src/assets/style/main.scss'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
.use(BootstrapVue3 as any)
.use(useBreakpoints)

router.isReady().then(() => app.mount('#app'))
