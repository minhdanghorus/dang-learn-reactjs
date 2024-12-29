import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard, { MovieCardSkeleton } from "./MovieCard";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import { v4 } from "uuid";

//https://api.themoviedb.org/3/movie/now_playing?api_key=cd274f8584c2f2d792eea93ffe4a8a94&language=en-US&page=1

const MovieList = ({ type = "now_playing" }) => {
  // const [movies, setMovies] = useState([]);
  const { data, error } = useSWR(tmdbAPI.getMovieList(type), fetcher);
  // console.log("🚀 ~ MovieList ~ data:", data);

  // useEffect(() => {
  //   if (data && data.results) setMovies(data.results);
  // }, [data]);
  const isLoading = !data && !error;
  const movies = data?.results || [];

  console.log("🚀 ~ MovieList ~ movies:", movies);
  return (
    <div className="movie-list">
      {isLoading && (
        <>
          <Swiper spaceBetween={40} grabCursor={"true"} slidesPerView={"auto"}>
            {new Array(7).fill(0).map(() => (
              <SwiperSlide key={v4()}>
                <MovieCardSkeleton></MovieCardSkeleton>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
      {!isLoading && (
        <Swiper spaceBetween={40} grabCursor={"true"} slidesPerView={"auto"}>
          {movies.length > 0 &&
            movies.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCard item={item}></MovieCard>
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </div>
  );
};

MovieList.PropTypes = {
  type: PropTypes.string.isRequired,
};

function FallbackComponent() {
  return (
    <div className=" bg-red-50 text-red-400">
      Something went wrong with this component
    </div>
  );
}

export default withErrorBoundary(MovieList, {
  FallbackComponent,
});
