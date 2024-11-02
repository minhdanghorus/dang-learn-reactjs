import React from "react";

const MovieCard = ({ item }) => {
  const { title, release_date, vote_average, poster_path } = item;
  return (
    <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 text-white h-full select-none">
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt=""
        className="w-full h-[250px] rounded-lg object-cover mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className="capitalize text-xl font-bold mb-3">{title}</h3>
        <div className="flex justify-between items-center text-sm opacity-50 mb-10">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{vote_average}</span>
        </div>
        <button className="py-3 px-6 bg-primary rounded-lg text-white font-medium capitalize w-full mt-auto">
          Watch now
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
