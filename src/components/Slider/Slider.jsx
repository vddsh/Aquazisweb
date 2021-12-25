import React, { Component, setState, useState } from "react";
import Slider from "react-slick";
import "./Slider.scss";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      centerMode: true,
      centerPadding: "0px",
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
    return (
      <div className="slickslider">
        <Slider {...settings}>
          <div className="slickslider__row">
            <img src="./img/slick-1.jpg" className="slickslider__img"></img>
          </div>
          <div className="slickslider__row">
            <img src="./img/slick-2.jpg" className="slickslider__img"></img>
          </div>
          <div className="slickslider__row">
            <img src="./img/slick-3.jpg" className="slickslider__img"></img>
          </div>
          <div className="slickslider__row">
            <img src="./img/slick-4.jpg" className="slickslider__img"></img>
          </div>
          <div className="slickslider__row">
            <img src="./img/slick-5.jpg" className="slickslider__img"></img>
          </div>
          <div className="slickslider__row">
            <img src="./img/slick-6.jpg" className="slickslider__img"></img>
          </div>
          <div className="slickslider__row">
            <img src="./img/slick-7.jpg" className="slickslider__img"></img>
          </div>
          <div className="slickslider__row">
            <img src="./img/slick-8.jpg" className="slickslider__img"></img>
          </div>
          <div className="slickslider__row">
            <img src="./img/slick-9.jpg" className="slickslider__img"></img>
          </div>
        </Slider>
      </div>
    );
  }
}
