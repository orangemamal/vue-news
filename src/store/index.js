import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store ({
  state: {
    // FETCH_NEWS라는 호출한 데이터가 빈배열에 담기게 된다.
    user: {},
    item: {},
    list: [],
  },
  mutations,
  actions,
})
