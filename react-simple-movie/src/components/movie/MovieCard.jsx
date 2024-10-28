import React from "react";

const MovieCard = () => {
  return (
    <div className="movie-card rounded-lg p-3 bg-slate-800 text-white">
      <img
        src="https://s3.cloud.cmctelecom.vn/tinhte1/2018/05/4308115_preview.medium.jpg"
        alt=""
        className="w-full h-[250px] rounded-lg object-cover mb-5"
      />
      <h3 className="capitalize text-xl font-bold mb-3">
        Doraemon và những hiệp sĩ không gian
      </h3>
      <div className="flex justify-between items-center text-sm opacity-50 mb-10">
        <span>2017</span>
        <span>7.4</span>
      </div>
      <button className="py-3 px-6 bg-primary rounded-lg text-white font-medium capitalize w-full">
        Watch now
      </button>
    </div>
  );
};

export default MovieCard;
