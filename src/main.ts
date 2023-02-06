import { createApp } from 'vue'
import i18n from './i18n';
import VueCookies from 'vue-cookies'
import stores from './stores';
import BootstrapVue3 from 'bootstrap-vue-3'
import { useBreakpoints } from "@/plugins/breakpoints";
// import PaginationPlugin from 'bootstrap-vue-3'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import '@/assets/style/main.scss'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
.use(i18n)
.use(VueCookies)
.use(stores)
.use(BootstrapVue3 as any)
.use(useBreakpoints)
// .use(PaginationPlugin)


stores.subscribe( (mutation, state) => {
  // localStorage.setItem('posts', JSON.stringify(state.posts));  
  // localStorage.setItem('photos', JSON.stringify(state.photos));  
  // localStorage.setItem('feedbacks', JSON.stringify(state.cards));
})

router.isReady().then(() => app.mount('#app'))
app.config.globalProperties
