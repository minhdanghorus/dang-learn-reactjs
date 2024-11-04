import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, apiKey } from "../config";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
    console.log("🚀 ~ MovieDetailsPage ~ params:", movieId);
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
    fetcher
  );
 console.log("🚀 ~ MovieDetailsPage ~ data:", data);
  return <div>Movie Details Page</div>;
};

export default MovieDetailsPage;
