import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    happening: 'Happy'
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
      axios({
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
        .then((response) => {
          console.log(response)
          context.commit('setNewHappening', response.data.text)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  modules: {
  }
})
