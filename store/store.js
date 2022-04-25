import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
export default new Vuex.Store({
  actions: {
    async login({ commit }, user) {
        commit('auth_request')
        const resp = await axios({ url: 'http://localhost:8000/login', data: user, method: 'POST' })
        const token = resp.data.token
        const user = resp.data.user
        localStorage.setItem('token', token)
        axios.defaults.headers.common['Authorization'] = token
        commit('auth_success', token, user)
    },

    async register({ commit }, user) {
        commit('auth_request')
        const resp = await axios({ url: 'http://localhost:3000/register', data: user, method: 'POST' })
        const token = resp.data.token
        const user = resp.data.user
        localStorage.setItem('token', token)
        axios.defaults.headers.common['Authorization'] = token
        commit('auth_success', token, user)
    },

    async logout({ commit }) {
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
    }
  },

  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, token, user) {
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error(state) {
      state.status = 'error'
    },
    logout(state) {
      state.status = ''
      state.token = ''
    },
  },

  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {}
  },

  getters: {
    getters: {
      isLoggedIn: state => !!state.token,
      authStatus: state => state.status,
    }
  }
})