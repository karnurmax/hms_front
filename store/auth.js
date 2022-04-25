export const state = () => ({
  token: '',
  user: null,
})

export const mutations = {
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
}

export const actions = {
  async login({ commit }, userData) {
    commit('auth_request')
    const resp = await this.$axios({
      url: 'http://localhost:8000/login',
      data: userData,
      method: 'POST',
    })
    const token = resp.data.token
    const user = resp.data.user
    localStorage.setItem('token', token)
    this.$axios.defaults.headers.common.Authorization = token
    commit('auth_success', token, user)
  },

  async register({ commit }, userData) {
    commit('auth_request')
    const resp = await this.$axios({
      url: '/api/register',
      data: userData,
      method: 'POST',
    })
    const token = resp.data.token
    const user = resp.data.user
    localStorage.setItem('token', token)
    this.$axios.defaults.headers.common.Authorization = token
    commit('auth_success', token, user)
  },

  async logout({ commit }) {
    commit('logout')
    localStorage.removeItem('token')
    delete this.$axios.defaults.headers.common.Authorization
    await this.$axios.post('')
  },
}

export const getters = {
  isLoggedIn: (state) => !!state.token,
}
