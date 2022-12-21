import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import Section from '../Shared/Section';

import 'swiper/css';
import 'swiper/css/navigation';
import './pride.scss';

import prevArrow from '../../assets/images/pride/arrow-left.svg';
import nextArrow from '../../assets/images/pride/arrow-right.svg';
import brewerLogo from '../../assets/images/pride/brewer-logo.png';
import sigmaLogo from '../../assets/images/pride/sigma-logo.png';
import digitalisLogo from '../../assets/images/pride/digitalis-logo.png';
import founderLogo from '../../assets/images/pride/founder-logo.png';
import symphonyLogo from '../../assets/images/pride/symphony-logo.png';

const slidesData = [
  {
    slideId: 1,
    slideUrl: brewerLogo,
  },
  {
    slideId: 2,
    slideUrl: sigmaLogo,
  },
  {
    slideId: 3,
    slideUrl: digitalisLogo,
  },
  {
    slideId: 4,
    slideUrl: founderLogo,
  },
  {
    slideId: 5,
    slideUrl: symphonyLogo,
  },
  {
    slideId: 6,
    slideUrl: brewerLogo,
  },
  {
    slideId: 7,
    slideUrl: sigmaLogo,
  },
  {
    slideId: 8,
    slideUrl: digitalisLogo,
  },
  {
    slideId: 9,
    slideUrl: founderLogo,
  },
  {
    slideId: 10,
    slideUrl: symphonyLogo,
  },
];

const Pride = () => {
  const [swiper, setSwiper] = useState();
  const prevRef = useRef();
  const nextRef = useRef();

  useEffect(() => {
    if (swiper) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  const slides = slidesData.map(slide => {
    const { slideId: id, slideUrl: url } = slide;

    return (
      <SwiperSlide key={id}>
        <img src={url} alt="Slider Logo" />
      </SwiperSlide>
    )
  });

  return (
    <Section className="pride">
      <h2 className="main-title">
        Proudly backed by
      </h2>
      <div className="pride__slider">
        <button className="swiper-btn swiper-prev" ref={prevRef}>
          <img src={prevArrow} alt="" />
        </button>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef?.current,
            nextEl: nextRef?.current
          }}
          onSwiper={setSwiper}
          loop
          centeredSlides
          breakpoints={{
            991: {
              slidesPerView: 5
            },
            768: {
              slidesPerView: 4
            },
            575: {
              slidesPerView: 3
            },
            375: {
              slidesPerView: 2
            },
            300: {
              slidesPerView: 1
            }
          }}
        >
          {slides}
        </Swiper>
        <button className="swiper-btn swiper-next" ref={nextRef}>
          <img src={nextArrow} alt="" />
        </button>
      </div>
    </Section>
  );
};

export default Pride;