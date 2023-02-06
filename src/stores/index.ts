import { createStore } from 'vuex'
import axios from 'axios'

const API = 'https://jsonplaceholder.typicode.com'

export default createStore({
  state: {
      feedbacks: [] as List[],
      perPage: 5,
      currentPage: 1,
      loading: false,
  },
  getters: {
    getPerPage: (state) => state.perPage,
    getCurrentPage: (state) => state.currentPage,
    gelLength: (state) => state.feedbacks.length,
    getFeedbacksPerPage: (state) => state.feedbacks.slice((state.currentPage - 1) * state.perPage, state.currentPage * state.perPage),
  },
  actions: {
    GET_FEEDBACK: async function ({commit}) {
      const stor = localStorage.getItem('feedbaks')
      if (stor && stor.length > 0) {
        commit('SET_FEEDBACKS', JSON.parse(stor))
      } else {
        commit('SET_LOADING')
        const posts = await axios.get(`${API}/posts`)
        const photos = await axios.get(`${API}/photos/?albumId=1&albumId=2`)
        const feeds = posts.data.map((post: Post, i: number) => {
          post.title1 = post.title
          return {...post, ...photos.data[i]}
        })
        commit('SET_LOADING')
        localStorage.setItem('feedbaks', JSON.stringify(feeds))
        commit('SET_FEEDBACKS', feeds)
      }
    },
  },
  mutations: {
    SET_LOADING(state) {
      state.loading = !state.loading
    },
    SET_FEEDBACKS(state, fedbacks) {
      state.feedbacks = fedbacks
    },
    SET_PAGE(state, page) {
      state.currentPage = page
    },
    INCREMENT_PAGE(state) {
      state.currentPage++
    },
    DECREMENT_PAGE(state) {
      state.currentPage--
    }
  }
})