export const state = () => ({
  events: [],
  eventitem: []
})

export const getters = {
  events (state) {
    return state.events
  },

  eventitem (state) {
    return state.eventitem
  }

}


export const mutations = {

  SET_EVENTS(state, events) {
    state.events = events
  },

  SET_EVENTITEM(state, eventitem) {
    state.eventitem = eventitem
  },


}
export const actions = {
  async fetchEvents ({ commit }, formData) {
    let url = 'http://localhost:8000/api/events'
    if(formData){
      if(formData.keyword) {
        url += '?keyword=' + formData.keyword
      }

      if(formData.city) {
        url += '?city=' + formData.city
      }

      if(formData.date) {
        url += '?date=' + formData.date
      }
    }
    const events = await this.$axios.$get(url)
    commit('SET_EVENTS', events)
  },

  async fetchEvent ({ commit },slug) {
    const eventitem = await this.$axios.$get('http://localhost:8000/api/events/' + slug)
    commit('SET_EVENTITEM', eventitem)
  }
}
