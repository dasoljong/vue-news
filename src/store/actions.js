import {
  fetchAskList,
  fetchJobsList,
  fetchNewsList,
  fetchUserInfo,
  fetchItemInfo
} from "@/api";

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then(response => {
        // 성공적으로 받아 온 response를 state.news에 넣어줘야하는데 그러한 동작은 mutations에 함수를 정의해서 그 안에서 실행.
        // state.news 접근 안됨.
        // "SET_NEWS" 함수를 실행하고 성공적으로 받아온 response를 보내줌.
        context.commit("SET_NEWS", response.data);
        return response;
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
  FETCH_ASK(context) {
    fetchAskList()
      .then(response => {
        console.log(response);
        context.commit("SET_ASK", response.data);
      })
      .catch(error => console.log(error));
  },
  FETCH_USER({ commit }, user) {
    fetchUserInfo(user)
      .then(({ data }) => {
        console.log(data);
        commit("SET_USER", data);
      })
      .catch(error => console.log(error));
  },
  FETCH_ITEM({ commit }, id) {
    fetchItemInfo(id)
      .then(({ data }) => {
        console.log(data);
        commit("SET_ITEM", data);
      })
      .catch(error => console.log(error));
  }
};
