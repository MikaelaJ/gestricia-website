import { createClient } from '../plugins/contentful'

const client = createClient()

export const state = () => ({
  tjanster: [],
  dropdownTitle: [],
  links: []
})

export const mutations = {
  setRoute(state, payload) {
    state[payload[1]] = payload[0]
  }
}

export const actions = {
  async getRoute({ commit }, obj) {
    const response = await client.getEntries(obj)
    if (response.items.length > 0) {
      commit('setRoute', [response.items, obj.content_type])
    }
  }
}
