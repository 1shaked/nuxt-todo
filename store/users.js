import Vue from Vue;
export const state = () => ({
  user: {},
  event: {}
})
export const mutations = {
  SET_EVENTS (state, events) {
    state.events = events
  },
  SET_EVENT (state, event) {
    state.event = event
  }
}
export const actions = {

}
