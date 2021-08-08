import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//axios
import axios from 'axios'
Vue.prototype.$axios = axios

Vue.config.productionTip = false

//swiper组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/swiper-bundle.css'
import 'swiper/css/swiper.css'
import 'swiper/css/swiper.min.css'
Vue.use(VueAwesomeSwiper)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')