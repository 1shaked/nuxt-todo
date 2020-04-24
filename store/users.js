import {
  SET_USER_DATA,
  CLEAR_USER_DATA,
  SET_TOKEN
} from '../Mutations/users'
export const state = () => ({
})
export const mutations = {
  [SET_USER_DATA] (state, userData) {
    this.$auth.setUser(userData)
    state.user = this.$auth.user
  },
  [SET_TOKEN] (state, token) {
    this.$auth.setUserToken(token)
  },
  [CLEAR_USER_DATA] (state) {
    // localStorage.removeItem('user')
    location.reload()
  }
}
export const actions = {
  login ({ commit }, { email, password }) {
    this.$axios.post('u/jwt/jwt/create/', {
      email,
      password
    })
      .then((respond) => {
        const token = respond.data.access
        commit(SET_TOKEN, token)
        this.$axios.$get('u/jwt/users/me/')
          .then((user) => {
            commit('SET_USER_DATA', { ...user, password })
          })
      })
  }
}
