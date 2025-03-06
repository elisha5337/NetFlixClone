import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
export default instance;
// https://api.themoviedb.org/3/movie/popular?api_key=a4997c5de6dad8e94b670186ec06979d&with_network=213
