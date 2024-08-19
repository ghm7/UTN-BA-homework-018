import { useLoaderData } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Mousewheel, Pagination } from 'swiper/modules';

import { IImagesGallery } from '../../../data/galleryData';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default function Carousel() {
  const [galleryObj] = useLoaderData() as Array<IImagesGallery>;
  const { gallery } = galleryObj;

  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      slideToClickedSlide={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      mousewheel={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
      }}
      pagination={true}
      modules={[Mousewheel, EffectCoverflow, Pagination]}
      className="remaining-space"
    >
      {gallery.map((image, index) => (
        <SwiperSlide key={index} className="w-[600px] h-[600px]">
          {<img src={image.path} />}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
