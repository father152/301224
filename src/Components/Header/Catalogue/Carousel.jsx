import React from 'react'
import Slider from 'react-slick';



const Carousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  
    return (
      <Slider {...settings}>
        <div>
          <img src='https://picsum.photos/id/78/900/600' alt='slide-1' />
        </div>
        <div>
          <img src='https://picsum.photos/id/79/900/600' alt='slide-2' />
        </div>
        <div>
          <img src='https://picsum.photos/id/80/900/600' alt='slide-3' />
        </div>
        <div>
          <img src='https://picsum.photos/id/60/900/600' alt='slide-1' />
        </div>
        <div>
          <img src='https://picsum.photos/id/65/900/600' alt='slide-2' />
        </div>
        <div>
          <img src='https://picsum.photos/id/66/900/600' alt='slide-3' />
        </div>
      </Slider>
    );
  };

export {Carousel}