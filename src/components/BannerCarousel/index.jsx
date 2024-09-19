import React , { useState, useEffect }  from 'react'
import styles from "./BannerCarousel.module.scss"
import {getImageUrl} from "../../utils/image-util"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination ,EffectFade} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import'swiper/css/autoplay'
import'swiper/css/effect-fade'

const BannerCarousel = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const imagesSubFolder = "banners"
    // Handle screen resize
    useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    // Define image URLs based on device type
     const images = isMobile
    ? [
        'CO-SegmentedInicio-Casino-Mobile.jpg',
        'CO-SegmentedInicio-XSELL-Mobile.jpg',
      ]
    : [
        'CO-SegmentedInicio-Casino-Desktop.jpg',
        'CO-SegmentedInicio-XSELL-Desktop.jpg',
      ];



  return (
    <div className={styles.bannersContainer}>
    <Swiper        centeredSlides={true}
        autoplay={{
          delay: 3250,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, EffectFade]} 
  effect="fade"  >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img key={image} className={styles.bannerImg} src={getImageUrl(image,imagesSubFolder)} alt={`Banner-${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  )
}

export default BannerCarousel



/*



const DynamicResponsiveSwiper = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Define image URLs based on device type
  const images = isMobile
    ? [
        '/assets/images/mobile-image-1.jpg',
        '/assets/images/mobile-image-2.jpg',
        '/assets/images/mobile-image-3.jpg',
      ]
    : [
        '/assets/images/desktop-image-1.jpg',
        '/assets/images/desktop-image-2.jpg',
        '/assets/images/desktop-image-3.jpg',
      ];

  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Slide ${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DynamicResponsiveSwiper;

*/