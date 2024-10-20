import React from "react";
import { useGallery } from "../../contexts/gallery-context";

const PhotoList = () => {
  const { photos } = useGallery();
  console.log("photos: ", photos);
  return <div>Photo List</div>;
};

export default PhotoList;
