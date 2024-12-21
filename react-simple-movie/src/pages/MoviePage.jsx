import React from "react";
import useSWR from "swr";
import { fetcher } from "../config";
import MovieCard from "../components/movie/MovieCard";
import useDebounce from "../hooks/useDebounce";

const MoviePage = () => {
  const [filter, setFilter] = React.useState("");
  const [url, setUrl] = React.useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=cd274f8584c2f2d792eea93ffe4a8a94&language=en-US`
  );
  const filterDebounce = useDebounce(filter, 500);
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const { data } = useSWR(url, fetcher);

  React.useEffect(() => {
    if (filterDebounce) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=cd274f8584c2f2d792eea93ffe4a8a94&language=en-US&query=${filterDebounce}&page=1&include_adult=false`
      );
    } else {
      setUrl(
        `https://api.themoviedb.org/3/movie/popular?api_key=cd274f8584c2f2d792eea93ffe4a8a94&language=en-US`
      );
    }
  });
  const movies = data?.results || [];
  //   console.log("🚀 ~ MovieList ~ data:", data);
  console.log("🚀 ~ MoviePage ~ movies:", movies);

  return (
    <div className="py-10 page-container">
      <div className="flex mb-10">
        <div className="flex-1">
          <input
            type="Text"
            className="w-full p-4 bg-slate-800"
            placeholder="Type here to search..."
            onChange={handleFilterChange}
          />
        </div>
        <button className="p-4 bg-primary text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {movies.length > 0 &&
          movies.map((item) => (
            <MovieCard item={item} key={item.id}></MovieCard>
          ))}
      </div>
    </div>
  );
};

export default MoviePage;
