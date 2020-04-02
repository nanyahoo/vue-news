import axios from 'axios';

//1. http Request & Response 와 관련된 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/'
}

//2. API 함수들의 정리
function fetchNewsList() {
  console.log("News GO..................");
  return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchAskList() {
  console.log("Ask GO..................");
  return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchJobsList() {
  console.log("Jobs GO..................");
  return axios.get(`${config.baseUrl}jobs/1.json`);
}

export {
  fetchNewsList,
  fetchAskList,
  fetchJobsList
}