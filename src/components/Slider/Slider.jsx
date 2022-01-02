import React, { useState } from "react";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import "./Slider.scss";

const NextArrow = ({ onClick }) => {
  return (
    <div className="nextArrow" onClick={onClick}>
      <BsChevronRight />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="prevArrow" onClick={onClick}>
      <BsChevronLeft />
    </div>
  );
};

export const IMAGES = [
  {
    id: 1,
    src: "/img/slick-1.jpg",
    alt: "Placeholder image",
  },
  {
    id: 2,
    src: "/img/slick-2.jpg",
    alt: "Placeholder image",
  },
  {
    id: 3,
    src: "/img/slick-3.jpg",
    alt: "Placeholder image",
  },
  {
    id: 4,
    src: "/img/slick-4.jpg",
    alt: "Placeholder image",
  },
  {
    id: 5,
    src: "/img/slick-5.jpg",
    alt: "Placeholder image",
  },
  {
    id: 6,
    src: "/img/slick-6.jpg",
    alt: "Placeholder image",
  },
];

const ImageSlider = ({ images, slidesToShow = 3 }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    className: "center",
    autoplay: true,
    autoplaySpeed: 2500,
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 300,
    slidesToShow: slidesToShow,
    centerPadding: "0",
    swipeToSlide: true,
    focusOnSelect: true,
    nextArrow: <NextArrow onClick />,
    prevArrow: <PrevArrow onClick />,

    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1490,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: 0,
          prevArrow: 0,
        },
      },
    ],
  };

  const templateImages = images.map((image, idx) => {
    if (image == null) {
      return null;
    }
    return (
      <div
        className={idx === imageIndex ? "activeSlide" : "slide"}
        key={image.id}
      >
        <div className="slideWrapper">
          {image.code ? image.code : <img src={image.src} alt={image.alt} />}
        </div>
      </div>
    );
  });

  return <Slider {...settings}>{templateImages}</Slider>;
};

export default ImageSlider;
