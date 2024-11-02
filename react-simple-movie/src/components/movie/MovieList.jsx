import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";
import useSWR from "swr";
import { fetcher } from "../../config";

//https://api.themoviedb.org/3/movie/now_playing?api_key=cd274f8584c2f2d792eea93ffe4a8a94&language=en-US&page=1

const MovieList = ({ type = "now_playing" }) => {
  // const [movies, setMovies] = useState([]);
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=cd274f8584c2f2d792eea93ffe4a8a94&language=en-US`,
    fetcher
  );
  console.log("🚀 ~ MovieList ~ data:", data);

  // useEffect(() => {
  //   if (data && data.results) setMovies(data.results);
  // }, [data]);
  const movies = data?.results || [];

  console.log("🚀 ~ MovieList ~ movies:", movies);
  return (
    <div className="movie-list">
      <Swiper spaceBetween={40} grabCursor={"true"} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
