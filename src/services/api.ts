import axios from "axios";

const api = axios.create({ baseURL: "https://taggram.herokuapp.com" });

export default api;
