import { createClient } from '../plugins/contentful'

const client = createClient()

export const state = () => ({
  form: []
})

export const mutations = {
  setComponent(state, payload) {
    state[payload[1]] = payload[0]
  }
}

export const actions = {
  async getComponent({ commit }, obj) {
    const response = await client.getEntries(obj)
    if (response.items.length > 0) {
      commit('setComponent', [response.items, obj.content_type])
    }
  }
}
