import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        date: '2017-07-17',
        imageUrl: 'https://unsplash.it/1440/500?image=25',
        id: '111',
        title: '[PH]'
      },
      {
        date: '2017-07-17',
        imageUrl: 'https://unsplash.it/1440/500?image=21',
        id: '222',
        title: '[PH]'
      },
      {
        date: '2017-07-17',
        imageUrl: 'https://unsplash.it/1440/500?image=22',
        id: '333',
        title: '[PH]'
      },
      {
        date: '2017-07-19',
        imageUrl: 'https://unsplash.it/1440/500?image=23',
        id: '444',
        title: '[PH]'
      }
    ],
    user: {
      id: 'assfaggsg',
      registeredMeetups: ['asgaddsgsg']
    }
  },
  mutations: {},
  actions: {},
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
    }
  }
})
