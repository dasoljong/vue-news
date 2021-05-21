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
  SET_USER(state, user) {
    state.user = user;
    console.log(state.user);
  },
  SET_ITEM(state, item) {
    state.item = item;
    console.log(state.item);
  }
};
