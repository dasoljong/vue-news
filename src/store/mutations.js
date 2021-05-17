export default {
  SET_NEWS(state, newsData) {
    state.news = newsData;
    console.log(state.news);
  },
  SET_JOBS(state, jobsData) {
    state.jobs = jobsData;
    console.log(state.jobs);
  },
  SET_ASK(state, askData) {
    state.ask = askData;
    console.log(state.ask);
  },
  SET_USER(state, userData) {
    state.user = userData;
    console.log(state.user);
  },
  SET_ITEM(state, itemData) {
    state.item = itemData;
    console.log(state.item);
  }
};
