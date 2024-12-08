import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className='h-100 w-100'>
      <Slider {...settings}>
        <div>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/assets/banner/a.png" className='h-100 w-100 border' style={{ objectFit: "contain" }} alt="Banner 1" />
          </a>
        </div>
        <div>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/assets/banner/b.png" className='h-100 w-100 border' style={{ objectFit: "contain" }} alt="Banner 2" />
          </a>
        </div>
        <div>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/assets/banner/c.png" className='h-100 w-100 border' style={{ objectFit: "contain" }} alt="Banner 3" />
          </a>
        </div>
      </Slider>
    </div>
  );
} 
