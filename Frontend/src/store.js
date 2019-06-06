import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    equipments: []
  },
  mutations: {
    set_user: (state, user) => state.user = user,
    set_equipments: (state, equipments) => state.equipments = equipments
  },
  actions: {
    get_user_login: ({ commit }) => Axios.post('/api/account/getUserLogin').then(res => commit('set_user', res.data)),
    set_equipments: ({ commit }, params = { page : 1 }) => Axios.get(`/api/equipment`, { params }).then(res => commit('set_equipments', res.data))
  }
})
