export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const apiKey = "cd274f8584c2f2d792eea93ffe4a8a94";
const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
export const tmdbAPI = {
  getMovieList: (type, page = 1, language = "en-US") =>
    `${tmdbEndpoint}/${type}?api_key=${apiKey}&language=${language}&page=${page}`,
  getMovieDetails: (id) => `${tmdbEndpoint}/${id}?api_key=${apiKey}`,
  getMovieMeta: (id, type) => `${tmdbEndpoint}/${id}/${type}?api_key=${apiKey}`,
  getMovieSearch: (query, page = 1, language = "en-US") =>
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language${language}&query=${query}&page=${page}&include_adult=false`,
  imageOriginal: (url) => `https://image.tmdb.org/t/p/original/${url}`,
  image500: (url) => `https://image.tmdb.org/t/p/w500/${url}`,
};
