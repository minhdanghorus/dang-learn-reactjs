import React from "react";
import useSWR from "swr";
import { fetcher } from "../../config";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Banner = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=cd274f8584c2f2d792eea93ffe4a8a94&language=en-US`,
    fetcher
  );
  console.log("🚀 ~ Banner ~ data:", data);
  const movies = data?.results || [];

  return (
    <section className="banner h-[500px] page-container mb-20 overflow-hidden">
      <Swiper
        grabCursor="true"
        slidesPerView={"auto"}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

function BannerItem({ item }) {
  const { title, poster_path } = item;
  return (
    <div className="w-full h-full rounded-lg relative">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
      <img
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt=""
        className="w-full h-full rounded-lg object-cover"
      />
      <div className="absolute left-5 bottom-5 w-full text-white">
        <div className="font-bold text-3xl mb-5">{title}</div>
        <div className="flex items-center gap-x-3 mb-8">
          <span className="py-2 px-4 border border-white rounded-md">
            Action
          </span>
          <span className="py-2 px-4 border border-white rounded-md">
            Adventure
          </span>
          <span className="py-2 px-4 border border-white rounded-md">
            Drama
          </span>
        </div>
        <button className="py-3 px-6 bg-primary rounded-lg text-white font-medium">
          Watch now
        </button>
      </div>
    </div>
  );
}

export default Banner;
