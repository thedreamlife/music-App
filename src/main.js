import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/golbal.css'
import http from './api/http'
// import './assets/stylus/index.styl'
Vue.config.productionTip = false

Vue.prototype.$http = http
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')