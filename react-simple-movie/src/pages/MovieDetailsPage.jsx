import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../config";
import { func } from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../components/movie/MovieCard";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  // console.log("🚀 ~ MovieDetailsPage ~ params:", movieId);
  const { data, error } = useSWR(tmdbAPI.getMovieDetails(movieId), fetcher);
  // console.log("🚀 ~ MovieDetailsPage ~ data:", data);
  if (!data) return null;
  const { backdrop_path, poster_path, title, genres, overview } = data;

  return (
    <div className="py-10">
      <div className="w-full h-[600px] relative" style={{}}>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div
          className="w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${tmdbAPI.imageOriginal(backdrop_path)})`,
          }}
        ></div>
      </div>
      <div className="w-full h-[300px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10">
        <img
          src={tmdbAPI.imageOriginal(poster_path)}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <h1 className="text-center text-4xl font-bold text-white mb-10">
        {title}
      </h1>
      {genres.length > 0 && (
        <div className="flex items-center justify-center gap-x-5 mb-10">
          {genres.map((item) => {
            return (
              <span
                className=" py-2 px-4 border-primary text-primary border"
                key={item.id}
              >
                {item.name}
              </span>
            );
          })}
        </div>
      )}
      <p className="text-center leading-relaxed max-w-[600px] mx-auto mb-10">
        {overview}
      </p>
      {/* <MovieCredits></MovieCredits>
      <MovieVideo></MovieVideo>
      <MovieSimilar></MovieSimilar> */}
      <MovieMeta type="credits"></MovieMeta>
      <MovieMeta type="videos"></MovieMeta>
      <MovieMeta type="similar"></MovieMeta>
    </div>
  );
};

function MovieMeta({ type = "videos" }) {
  const { movieId } = useParams();
  const { data, error } = useSWR(tmdbAPI.getMovieMeta(movieId, type), fetcher);
  console.log("type:", type);
  console.log("movieId:", movieId);
  console.log("data: ", data);

  if (!data) return null;
  if (type === "credits") {
    const { cast } = data;
    if (!cast || cast.length === 0) return null;
    return (
      <div className="py-10">
        <h2 className="text-center text-3xl mb-10">Cast</h2>
        <div className="grid grid-cols-4 gap-5">
          {cast.slice(0, 4).map((item) => {
            return (
              <div className="cast-item" key={item.id}>
                <img
                  src={tmdbAPI.imageOriginal(item.profile_path)}
                  alt=""
                  className=" w-full h-[350px] object-cover rounded-lg mb-3"
                />
                <h3 className="text-xl">{item.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    const { results } = data;
    if (!results || results.length === 0) return null;
    if (type === "videos") {
      return (
        <div className="py-10">
          <div className="flex flex-col gap-10">
            {results.slice(0, 2).map((item) => {
              return (
                <div className="" key={item.id}>
                  <div className=" w-full aspect-video mb-10" key={item.id}>
                    <h3 className=" mb-5 text-xl font-medium p-3 bg-secondary inline-block">
                      {item.name}
                    </h3>
                    <iframe
                      width="1503"
                      height="799"
                      src={`https://www.youtube.com/embed/${item.key}`}
                      title={item.name}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="w-full h-full object-fill"
                    ></iframe>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    } else if (type === "similar") {
      return (
        <div className="py-10">
          <h2 className=" text-3xl font-medium mb-10">Similar movies</h2>
          <div className="movie-list">
            <Swiper
              spaceBetween={40}
              grabCursor={"true"}
              slidesPerView={"auto"}
            >
              {results.length > 0 &&
                results.map((item) => (
                  <SwiperSlide key={item.id}>
                    <MovieCard item={item}></MovieCard>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

function MovieCredits() {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    tmdbAPI.getMovieMeta(movieId, "credits"),
    fetcher
  );
  // console.log("🚀 ~ MovieCredits ~ data:", data);

  if (!data) return null;
  const { cast } = data;
  if (!cast || cast.length === 0) return null;

  return (
    <div className="py-10">
      <h2 className="text-center text-3xl mb-10">Cast</h2>
      <div className="grid grid-cols-4 gap-5">
        {cast.slice(0, 4).map((item) => {
          return (
            <div className="cast-item" key={item.id}>
              <img
                src={tmdbAPI.imageOriginal(item.profile_path)}
                alt=""
                className=" w-full h-[350px] object-cover rounded-lg mb-3"
              />
              <h3 className="text-xl">{item.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function MovieVideo() {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    tmdbAPI.getMovieMeta(movieId, "videos"),
    fetcher
  );
  // console.log("🚀 ~ MovieVideo ~ data:", data);
  if (!data) return null;
  const { results } = data;
  if (!results || results.length === 0) return null;
  return (
    <div className="py-10">
      <div className="flex flex-col gap-10">
        {results.slice(0, 2).map((item) => {
          return (
            <div className="" key={item.id}>
              <div className=" w-full aspect-video mb-10" key={item.id}>
                <h3 className=" mb-5 text-xl font-medium p-3 bg-secondary inline-block">
                  {item.name}
                </h3>
                <iframe
                  width="1503"
                  height="799"
                  src={`https://www.youtube.com/embed/${item.key}`}
                  title={item.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full object-fill"
                ></iframe>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  // <iframe width="1503" height="799" src="https://www.youtube.com/embed/f_u908_TUmI" title="🔴TRỰC TIẾP: VIỆT NAM - MYANMAR | ASEAN MITSUBISHI ELECTRIC CUP™ 2024" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
}

function MovieSimilar() {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    tmdbAPI.getMovieMeta(movieId, "similar"),
    fetcher
  );
  // console.log("🚀 ~ MovieSimilar ~ data:", data);
  if (!data) return null;
  const { results } = data;
  if (!results || results.length === 0) return null;

  return (
    <div className="py-10">
      <h2 className=" text-3xl font-medium mb-10">Similar movies</h2>
      <div className="movie-list">
        <Swiper spaceBetween={40} grabCursor={"true"} slidesPerView={"auto"}>
          {results.length > 0 &&
            results.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCard item={item}></MovieCard>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default MovieDetailsPage;
