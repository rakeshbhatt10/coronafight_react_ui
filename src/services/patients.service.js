import axios from "axios";
const api = "https://api.livecovid.in/api";

export const getStateWiseData = () => {
  return axios.get(`${api}/state`);
};

export const getDistrictWiseData = () => {
  return axios.get(`${api}/district`);
};

export const getStats = () => {
  return axios.get(`${api}/stats`);
};

export const getTestingData = () => {
  return axios.get(`${api}/states/testing`)
}