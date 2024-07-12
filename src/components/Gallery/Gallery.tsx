import React, { FC } from "react";
import ImageGallery from "react-image-gallery";
import './Gallery.css';

type Photo = {
    original: string;
    thumbnail: string;
    originalClass: string;
  };
  

  const images = [
    {
      original: "/10.jpg",
      thumbnail: "",
      originalClass: "gallery-image",
    },
    {
      original: "/11.jpg",
      thumbnail: "",
      originalClass: "gallery-image",
    },
    {
      original: "/daryna.png",
      thumbnail: "",
      originalClass: "gallery-image",
    },
  ];
  
  export const Gallery: FC = () => {
      return <ImageGallery items={images} showBullets={true} autoPlay={true}/>;
  }