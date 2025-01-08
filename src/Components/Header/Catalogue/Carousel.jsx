import React from 'react'
import LoremIpsum from 'react-lorem-ipsum';
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
        <div className='photo-text'>
          <img src='https://picsum.photos/id/78/1100/500' alt='slide-1' />
          <p><LoremIpsum /></p>
        </div>
        <div>
          <img src='https://picsum.photos/id/79/1100/500' alt='slide-2' />
          <p><LoremIpsum /></p>
        </div>
        <div>
          <img src='https://picsum.photos/id/80/1100/500' alt='slide-3' />
          <p><LoremIpsum /></p>
        </div>
        <div>
          <img src='https://picsum.photos/id/60/1100/500' alt='slide-1' />
          <p><LoremIpsum /></p>
        </div>
        <div>
          <img src='https://picsum.photos/id/65/1100/500' alt='slide-2' />
          <p><LoremIpsum /></p>
        </div>
        <div>
          <img src='https://picsum.photos/id/66/1100/500' alt='slide-3' />
          <p><LoremIpsum /></p>
        </div>
      </Slider>
    );
  };

export {Carousel}