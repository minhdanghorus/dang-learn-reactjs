import React, { useEffect, useState } from "react";
import axios from "axios";

const getRandomPhotos = (page) => {
  return axios
    .get(`https://picsum.photos/v2/list?page=${page}&limit=8`)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

const Photos = () => {
  const [randomPhotos, setRandomPhotos] = useState([]);
  const [nextPage, setNextPage] = useState(1);

  const handleLoadMorePhotos = () => {
    getRandomPhotos(nextPage).then((images) => {
      setRandomPhotos([...randomPhotos, ...images]);
      setNextPage(nextPage + 1);
    });
  };

  useEffect(() => {
    handleLoadMorePhotos();
  }, []);
  return (
    <div>
      <div className=" grid grid-cols-4 gap-5 p-5">
        {randomPhotos.length > 0 &&
          randomPhotos.map((item, index) => (
            <div key={item.id} className=" p-3 bg-white shadow-md rounded-lg">
              <img
                src={item.download_url}
                alt={item.author}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          ))}
      </div>
      <div className=" text-center">
        <button
          onClick={handleLoadMorePhotos}
          className=" inline-block px-8 py-4 bg-purple-600 text-white"
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default Photos;
