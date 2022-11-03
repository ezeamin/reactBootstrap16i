import React from 'react';
import { Carousel } from 'react-bootstrap';

import './carouselMario.css';

const CarrouselMario = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className='d-block w-100 imagenCarousel'
          src='https://i0.wp.com/elplanetaurbano.com/wp-content/uploads/2020/10/Super-Mario-Bros-1-1280x720-1.jpg?fit=1280%2C720&ssl=1'
          alt='Mario 1'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100 imagenCarousel'
          src='https://cnnespanol.cnn.com/wp-content/uploads/2022/10/Diseno-sin-titulo-8.jpg?quality=100&strip=info'
          alt='Mario 2'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100 imagenCarousel'
          src='https://cdn.forbes.com.mx/2021/09/Mario-bros.jpeg'
          alt='Mario 3'
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarrouselMario;
