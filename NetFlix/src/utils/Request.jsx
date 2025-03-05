// eslint-disable-next-line no-undef
// https://api.themoviedb.org/3/movie/popular?api_key=a4997c5de6dad8e94b670186ec06979d&with_networks=213  original
// https://api.themoviedb.org/3/movie/popular?api_key=a4997c5de6dad8e94b670186ec06979d&with_network=213
const Api_key = import.meta.env.VITE_API_KEY;
const Request = {
  fetch1: `/movie/popular?api_key=${Api_key}&with_network=213`,
  fetch2: `/movie/top_rated?api_key=${Api_key}&network=213`,
  fetch3: `/movie/popular?api_key=${Api_key}&language-en=US`,
  fetch4: `/movie/popular?api_key=${Api_key}&with_genres=28`,
  fetch5: `/movie/popular??api_key=${Api_key}&with_genres=35`,
  fetch6: `/movie/popular??api_key=${Api_key}&with_genres=27`,
  fetch7: `/movie/popular?api_key=${Api_key}&with_genres=10749`,
  fetch8: `/movie/popular?api_key=${Api_key}&with_genres=99`,
};
export default Request;
