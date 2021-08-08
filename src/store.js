import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let resultCity = '北京'
resultCity = localStorage.city

export default new Vuex.Store({
    state: {
        city: resultCity,
        project: {}
    },
    mutations: {
        changeCity(state, cityName) {
            state.city = cityName
            localStorage.city = cityName
        },
        toProject(state, item) {
            state.project = item
        }
    },
    actions: {

    }
})