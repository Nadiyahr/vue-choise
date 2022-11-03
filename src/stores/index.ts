import { createStore } from 'vuex'
import axios from 'axios'

const API = 'https://jsonplaceholder.typicode.com'

export default createStore({
  state: {
      posts: [] as Post[],
      photos: [] as Photo[],
      loading: false
  },
  getters: {
    completPosts: (state) => state.posts.map((post, i) => {
      post.title1 = post.title
     return {...post, ...state.photos[i]}
    })
  },
  actions: {
    GET_POSTS: async function ({commit}, payload) {
      if (localStorage.getItem('posts')) {
        const local = JSON.parse(localStorage.posts)
        commit('SET_POSTS', local)
     } else {
        const response = await axios.get(`${API}/users/${payload}/posts`)
 
        commit('SET_POSTS', response.data)
     }
    },
    GET_PHOTOS: async function ({commit}, payload) {
      if (localStorage.getItem('photo')) {
        const local = JSON.parse(localStorage.photo)
        commit('SET_POHOTOS', local)
     } else {
      const response = await axios.get(`${API}/albums/${payload}/photos`, {
        params: {
          _limit: 10
        }
      })
      commit('SET_POHOTOS', response.data)
    }
   }
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts
    },
    SET_POHOTOS(state, photos) {
      state.photos = photos
    }
  }
})
