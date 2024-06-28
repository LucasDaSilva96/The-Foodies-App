'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-fade';
import { EffectCube, Pagination, Autoplay, Navigation } from 'swiper/modules';
import burger from '@/assets/images/burger.jpg';
import curry from '@/assets/images/curry.jpg';
import dumplings from '@/assets/images/dumplings.jpg';
import macncheese from '@/assets/images/macncheese.jpg';
import pizza from '@/assets/images/pizza.jpg';
import schnitzel from '@/assets/images/schnitzel.jpg';
import tomatoSalad from '@/assets/images/tomato-salad.jpg';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css';

const IMAGES = [
  { src: burger, alt: 'Burger' },
  { src: curry, alt: 'Curry' },
  { src: dumplings, alt: 'Dumplings' },
  { src: macncheese, alt: 'Mac and cheese' },
  { src: pizza, alt: 'Pizza' },
  { src: schnitzel, alt: 'Schnitzel' },
  { src: tomatoSalad, alt: 'Tomato salad' },
];

export default function ImageSlideGallery() {
  return (
    <div className='relative w-[370px] h-[370px] shadow-lg'>
      <Swiper
        modules={[EffectCube, Pagination, Autoplay, Navigation]}
        navigation
        pagination={true}
        loop={true}
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {IMAGES.map((image, index) => (
          <SwiperSlide key={index}>
            <Image src={image.src} alt={image.alt} priority />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
