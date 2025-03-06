// eslint-disable-next-line no-undef
// https://api.themoviedb.org/3/discover/movie?api_key=a4997c5de6dad8e94b670186ec06979d&with_networks=213  original
// https://api.themoviedb.org/3/discover/movie?api_key=a4997c5de6dad8e94b670186ec06979d&with_network=213
const Api_key = import.meta.env.VITE_API_KEY;
const Request = {
  fetch1: `/trending/all/week?api_key=${Api_key}&with_network=213`,
  fetch2: `/movie/top_rated?api_key=${Api_key}&language-en=US`,
  fetch3: `/discover/movie?api_key=${Api_key}&with_genres=28`,
  fetch4: `/discover/movie?api_key=${Api_key}&with_genres=35`,
  fetch5: `/discover/movie?api_key=${Api_key}&with_genres=27`,
  fetch6: `/discover/movie?api_key=${Api_key}&with_genres=10749`,
  fetch7: `/discover/movie?api_key=${Api_key}&with_genres=99`,
  fetch8: `/tv/popular?api_key=${Api_key}&language-en-US&page=1`,
};
export default Request;
// https://api.themoviedb.org/3/discover/tv?api_key=a4997c5de6dad8e94b670186ec06979d&with_genres=28
