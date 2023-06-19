import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { contents } from '../../assets/heroContent';
import './Hero.css';

const Hero = () => {
  const [placeDetail, setPlaceDetail] = useState({});

  const onChange = (index) => {
    const catchPlaceAlt = document
      .getElementsByClassName('swiper-slide-active')?.[0]
      .getElementsByClassName('swiperImage')?.[0].alt;
    console.log(catchPlaceAlt);
    const catchPlace = contents.filter(
      (item) => item.placeName == catchPlaceAlt
    );
    setPlaceDetail(catchPlace?.[0]);
    console.log(catchPlace?.[0]);
    // const catchPlace = contents[index];
    // setPlaceDetail(catchPlace);
  };
  const [swiperInstance, setSwiperInstance] = useState(null);
  // const [isFirstSlide, setIsFirstSlide] = useState(true);
  // const [isLastSlide, setIsLastSlide] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const goPrevSlide = () => {
    if (swiperInstance && swiperInstance.activeIndex > 0) {
      swiperInstance.slidePrev();
      onChange();
    }
  };

  const goNextSlide = () => {
    if (
      swiperInstance &&
      swiperInstance.activeIndex < swiperInstance.slides.length - 1
    ) {
      swiperInstance.slideNext();
      onChange();
    }
  };

  const onSwiperInit = (swiper) => {
    setSwiperInstance(swiper);
    setCurrentSlide(swiper.activeIndex);
    // setIsFirstSlide(swiper.activeIndex === 0);
    // setIsLastSlide(swiper.activeIndex === swiper.slides.length - 1);
  };

  useEffect(() => {
    if (swiperInstance) {
      const handleSlideChange = (swiper) => {
        setCurrentSlide(swiper.activeIndex);
        // setIsFirstSlide(swiperInstance.activeIndex === 0);
        // setIsLastSlide(
        //   swiperInstance.activeIndex === swiperInstance.slides.length - 1
        // );
      };

      swiperInstance.on('slideChange', handleSlideChange);

      return () => {
        swiperInstance.off('slideChange', handleSlideChange);
      };
    }
  }, [swiperInstance]);
  return (
    <>
      <div className='hero'>
        <div className='heroDetail'>
          <h3>{placeDetail?.placeName?.toUpperCase()}</h3>
          <p>{placeDetail?.description}</p>
          <button className='bookingBtn'>Booking --</button>
        </div>
        <div className='heroCarousel'>
          <Swiper
            onSwiper={onSwiperInit}
            // initialSlide={Math.floor(contents.length / 2)}
            autoplay={{
              delay: 3000, // Delay between slides in milliseconds
              disableOnInteraction: false, // Autoplay continues even when user interacts with the swiper
            }}
            centeredSlides={true}
            // slidesPerView={2.5}
            breakpoints={{
              730: {
                slidesPerView: 2.5,
              },
              465: {
                slidesPerView: 1,
              },
              350: {
                slidesPerView: 2,
              },
              100: {
                slidesPerView: 1,
              },
            }}
            spaceBetween={30}
            grabCursor={true}
            className='mySwiper'
          >
            {contents.map((item, key) => (
              <SwiperSlide key={key}>
                <div className='swiperItem' onClickCapture={() => onChange()}>
                  <img
                    onLoad={() => onChange()}
                    src={item.image}
                    alt={item.placeName}
                    className='swiperImage'
                  />
                  <p className='swiperText'>{item.placeName}</p>
                </div>
              </SwiperSlide>
            ))}
            {/* Add more SwiperSlide items */}
          </Swiper>
          <div className='carouselBtn'>
            <button onClick={() => goPrevSlide()} disabled={currentSlide === 0}>
              <GrPrevious />
            </button>
            <button
              onClick={() => goNextSlide()}
              disabled={currentSlide === contents.length - 1}
            >
              <GrNext />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
