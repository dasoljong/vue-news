import { fetchAskList, fetchJobsList, fetchNewsList } from "@/api";

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then(response => {
        // 성공적으로 받아 온 response를 state.news에 넣어줘야하는데 그러한 동작은 mutations에 함수를 정의해서 그 안에서 실행.
        // state.news 접근 안됨.
        // "SET_NEWS" 함수를 실행하고 성공적으로 받아온 response를 보내줌.
        context.commit("SET_NEWS", response.data);
      })
      .catch(err => console.log(err));
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then(({ data }) => {
        commit("SET_JOBS", data);
      })
      .catch(err => console.log(err));
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then(({ data }) => {
        commit("SET_ASK", data);
      })
      .catch(error => console.log(error));
  }
};
