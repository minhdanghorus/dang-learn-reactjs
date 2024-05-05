import React, { useEffect, useState } from "react";
import axios from "axios";

const getRandomPhotos = () => {
  return axios
    .get("https://picsum.photos/v2/list")
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

// https://picsum.photos/v2/list
const Photos = () => {
  const [randomPhotos, setRandomPhotos] = useState([]);
  useEffect(() => {
    getRandomPhotos().then((images) => {
        setRandomPhotos(images);
    })
  }, []);
  console.log("outside");
  return <div>{JSON.stringify(randomPhotos)}</div>;
};

export default Photos;
