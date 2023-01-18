import { useState, useEffect, useRef, useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';

import { ThemeContext } from 'src/context/ThemeContext';

import Section from '../shared/Section';

import 'swiper/css';
import 'swiper/css/navigation';
import './pride.scss';

import prevArrow from 'src/assets/images/pride/arrow-left.svg';
import nextArrow from 'src/assets/images/pride/arrow-right.svg';
import brewerLogo from 'src/assets/images/pride/brewer-logo.png';
import sigmaLogo from 'src/assets/images/pride/sigma-logo.png';
import digitalisLogo from 'src/assets/images/pride/digitalis-logo.png';
import founderLogo from 'src/assets/images/pride/founder-logo.png';
import symphonyLogo from 'src/assets/images/pride/symphony-logo.png';

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
  const { theme } = useContext(ThemeContext);

  const [swiper, setSwiper] = useState();
  const prevElRef = useRef();
  const nextElRef = useRef();

  useEffect(() => {
    if (swiper) {
      swiper.params.navigation.prevEl = prevElRef?.current;
      swiper.params.navigation.nextEl = nextElRef?.current;
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
      <h2 className="main-title" style={{
        color: theme === 'dark' ? '#96e6ca' : ''
      }}>
        Proudly backed by
      </h2>
      <div className="pride__slider">
        <button className="swiper-btn swiper-prev" ref={prevElRef}>
          <img src={prevArrow} alt="" />
        </button>
        <Swiper
          slidesPerView={5}
          spaceBetween={40}
          modules={[Navigation, Autoplay]}
          onSwiper={setSwiper}
          loop
          speed={500}
          autoplay={{
            delay: 1500
          }}
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
        <button className="swiper-btn swiper-next" ref={nextElRef}>
          <img src={nextArrow} alt="" />
        </button>
      </div>
    </Section >
  );
};

export default Pride;