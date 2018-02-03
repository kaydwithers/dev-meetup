import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        date: new Date(),
        description: 'Welcome',
        imageUrl: 'https://unsplash.it/1440/500?image=25',
        id: '111',
        location: 'Melbourne',
        title: 'Meetup in Melbourne'
      },
      {
        date: new Date(),
        description: 'Welcome',
        imageUrl: 'https://unsplash.it/1440/500?image=21',
        id: '222',
        location: 'Tokyo',
        title: 'Meetup in Tokyo'
      },
      {
        date: new Date(),
        description: 'Welcome',
        imageUrl: 'https://unsplash.it/1440/500?image=22',
        id: '333',
        location: 'Berlin',
        title: 'Meetup in Berlin'
      },
      {
        date: new Date(),
        description: 'Welcome',
        imageUrl: 'https://unsplash.it/1440/500?image=23',
        id: '444',
        location: 'London',
        title: 'Meetup in London'
      }
    ],
    user: null,
    loading: false,
    error: null
  },

  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    },

    setUser (state, payload) {
      state.user = payload
    },

    setLoading (state, payload) {
      state.loading = payload
    },

    setError (state, payload) {
      state.error = payload
    },

    clearError (state) {
      state.error = null
    }
  },

  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        date: payload.date,
        description: payload.description,
        location: payload.location,
        imageUrl: payload.imageUrl,
        title: payload.title
      }
      // Reach out to Firebase and store it.
      commit('createMeetup', meetup)
    },

    signUserUp ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              registeredMeetups: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
          }
        )
    },

    signUserIn ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              registeredMeetups: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },

    clearError ({commit}) {
      commit('clearError')
    }
  },

  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },

    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },

    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    },

    user (state) {
      return state.user
    },

    loading (state) {
      state.loading
    },

    error (state) {
      return state.error
    }
  }
})
