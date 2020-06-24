import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    happening: {
      text: 'John Hinckley is found not guilty by reason of insanity for the attempted assassination of U.S. President Ronald Reagan.',
      year: '1982'
    }
  },
  mutations: {
    setNewHappening (state, happening) {
      state.happening = happening
    }
  },
  actions: {
    getAnHappening (context) {
      const d = new Date(Date.now())
      const date = {
        month: d.getMonth() + 1,
        day: d.getDate()
      }
      return axios({
        method: 'GET',
        url: `https://numbersapi.p.rapidapi.com/${date.month}/${date.day}/date`,
        headers: {
          'content-type': 'application/octet-stream',
          'x-rapidapi-host': 'numbersapi.p.rapidapi.com',
          'x-rapidapi-key': '81c659109dmshadb56c0ea289726p179823jsn96f706f9ac31',
          useQueryString: true
        },
        params: {
          fragment: false,
          json: true
        }
      })
    }
  },
  modules: {
  }
})
