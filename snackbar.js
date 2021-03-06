export const snackbar = {
  state: {
    color: 'primary',
    text: '',
    show: false,
  },
  mutations: {
    TEST (state, data) {
      state.color = data
    },
  },
  actions: {
    showSnackBar ({ commit }, data) {
      if (data.text) commit('SET_TEXT', data.text)
      if (data.color) commit('SET_COLOR', data.color)
      commit('SET_SHOW', true)
    },
  },
}
