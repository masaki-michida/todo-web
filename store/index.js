import Vue from 'vue'
import Vuex from 'vuex'
import actions from '@/store/actions'
import mutations from '@/store/mutations'

Vue.use(Vuex)

const store = () => {
  return new Vuex.Store({
    state: {
      currentUser: {},
      loading: false,
      notification: {
        status: false,
        message: ''
      }
    },
    mutations,
    actions
  })
}

export default store
