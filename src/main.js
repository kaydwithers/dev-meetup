// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/shared/alert'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDCY-gaZ1gcMaVxJQ-hrXdFztfMB92EsZI',
      authDomain: 'kw-devmeetup.firebaseapp.com',
      databaseURL: 'https://kw-devmeetup.firebaseio.com',
      projectId: 'kw-devmeetup',
      storageBucket: 'kw-devmeetup.appspot.com'
    })
  }
})
