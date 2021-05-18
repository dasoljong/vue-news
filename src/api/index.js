import axios from "axios";

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: "https://api.hnpwa.com/v0/"
};

// 2. API 함수들을 정리
function fetchNewsList() {
  const url = `${config.baseUrl}news/1.json`;
  return axios.get(url);
}

function fetchAskList() {
  const url = `${config.baseUrl}ask/1.json`;
  return axios.get(url);
}

function fetchJobsList() {
  const url = `${config.baseUrl}jobs/1.json`;
  return axios.get(url);
}

function fetchUserInfo(userName) {
  const url = `${config.baseUrl}user/${userName}.json`;
  return axios.get(url);
}

function fetchItem(id) {
  const url = `${config.baseUrl}item/${id}.json`;
  return axios.get(url);
}
export { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchItem };
