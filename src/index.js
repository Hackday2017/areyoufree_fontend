import Vue from 'vue'
import App from './components/app.vue'
import style from './main.scss'
import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)
new Vue({
    el: "#app",
    render: h => h(App)
})
