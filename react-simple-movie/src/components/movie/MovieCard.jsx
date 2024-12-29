import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../buttons/Button";
import { tmdbAPI } from "../../config";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import LoadingSkeleton from "../loading/LoadingSkeleton";

const MovieCard = ({ item }) => {
  const { title, release_date, vote_average, poster_path, id } = item;
  const navigate = useNavigate();
  return (
    <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 text-white h-full select-none">
      <img
        src={tmdbAPI.image500(poster_path)}
        alt=""
        className="w-full h-[250px] rounded-lg object-cover mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className="capitalize text-xl font-bold mb-3">{title}</h3>
        <div className="flex justify-between items-center text-sm opacity-50 mb-10">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{vote_average}</span>
        </div>
        <Button
          onClick={() => {
            navigate(`/movie/${id}`);
          }}
          className={"text-white font-medium"}
        >
          Watch now
        </Button>
      </div>
    </div>
  );
};

MovieCard.PropTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    poster_path: PropTypes.string,
    id: PropTypes.number,
  }),
};

function FallbackComponent() {
  return (
    <div className=" bg-red-50 text-red-400">
      Something went wrong with this component
    </div>
  );
}

export default withErrorBoundary(MovieCard, {
  FallbackComponent,
});

export const MovieCardSkeleton = () => {
  return (
    <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 text-white h-full select-none">
      <LoadingSkeleton
        width="100%"
        height="250px"
        borderRadius="8px"
        className="mb-5"
      ></LoadingSkeleton>
      <div className="flex flex-col flex-1">
        <h3 className="capitalize text-xl font-bold mb-3">
          <LoadingSkeleton width="100%" height="20px"></LoadingSkeleton>
        </h3>
        <div className="flex justify-between items-center text-sm opacity-50 mb-10">
          <span>
            <LoadingSkeleton width="50px" height="10px"></LoadingSkeleton>
          </span>
          <span>
            <span>
              <LoadingSkeleton width="30px" height="10px"></LoadingSkeleton>
            </span>
          </span>
        </div>
        <span>
          <LoadingSkeleton width="100%" height="45px" borderRadius="6px"></LoadingSkeleton>
        </span>
      </div>
    </div>
  );
};
