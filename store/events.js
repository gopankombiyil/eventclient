export const state = () => ({
  events: [],
})

export const getters = {
  events (state) {
    return state.events
  },

}


export const mutations = {

  SET_EVENTS(state, events) {
    state.events = events
  },

}
export const actions = {
  async fetchEvents ({ commit }) {
    const events = await this.$axios.$get('http://localhost:8000/api/events')
    commit('SET_EVENTS', events)
  }
}
