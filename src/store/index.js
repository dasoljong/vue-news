import Vue from "vue";
import Vuex from "vuex";
import mutations from "@/store/mutations.js";
import actions from "@/store/actions.js";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    ask: [],
    jobs: []
  },
  getters: {
    fetchedJobs(state) {
      return state.jobs;
    }
  },
  mutations: mutations,
  // actions은 api를 호출할때 씀
  actions: actions
});
