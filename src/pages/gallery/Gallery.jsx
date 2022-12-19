import React from "react";
import "./gallery.css";
const Gallery = () => {
  const galleryData = [
    {
      id: 1,
      img: require("../../images/gallery1.jpg"),
    },
    {
      id: 2,
      img: require("../../images/gallery2.jpg"),
    },
    {
      id: 3,
      img: require("../../images/gallery3.jpg"),
    },
    {
      id: 4,
      img: require("../../images/gallery4.jpg"),
    },
    {
      id: 5,
      img: require("../../images/gallery5.jpg"),
    },
    {
      id: 6,
      img: require("../../images/gallery6.jpg"),
    },
    {
      id: 7,
      img: require("../../images/gallery7.jpg"),
    },
    {
      id: 8,
      img: require("../../images/gallery8.jpg"),
    },
    {
      id: 9,
      img: require("../../images/gallery9.jpg"),
    },
    {
      id: 10,
      img: require("../../images/gallery10.jpg"),
    },
    {
      id: 11,
      img: require("../../images/gallery11.jpg"),
    },
    {
      id: 12,
      img: require("../../images/gallery12.jpg"),
    },
  ];
  return (
    <>
      <div className="container gallery__container section">
        {galleryData.map((image, index) => {
          return (
            <div className="gallery__img-wrapper" key={index}>
              <img src={image.img} alt="" className="gallery__img" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
