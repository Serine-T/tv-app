import { Swiper } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { FC } from 'react';

const TrendingSection: FC = () => {
  return (
    <Swiper spaceBetween={10} slidesPerView={8}>
      {/* {trending.map((video) => (
        <SwiperSlide key={video.id}>
          <img src={video.coverImage} alt={video.title} />
        </SwiperSlide>
      ))} */}
    </Swiper>
  );
};

export default TrendingSection;
