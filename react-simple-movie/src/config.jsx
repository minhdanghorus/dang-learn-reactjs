export const fetcher = (...args) => fetch(...args).then(res => res.json());

export const apiKey = "cd274f8584c2f2d792eea93ffe4a8a94"
const tmdbEndpoint = "https://api.themoviedb.org/3/movie"
export const tmdbAPI = {
    getMovieList: (type) => `${tmdbEndpoint}/${type}?api_key=${apiKey}`,
    getMovieDetails: (id) => `${tmdbEndpoint}/${id}?api_key=${apiKey}`,
    getMovieMeta: (id, type) => `${tmdbEndpoint}/${id}/${type}?api_key=${apiKey}`,
    imageOriginal: (url) => `https://image.tmdb.org/t/p/original/${url}`,
    image500: (url) => `https://image.tmdb.org/t/p/w500/${url}`,
}
