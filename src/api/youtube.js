import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  params: {
    part: "snippet",
    maxResults: 5,
    key: API_KEY,
  },
});
