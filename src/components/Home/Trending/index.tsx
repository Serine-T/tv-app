import { ImageListItemBar } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@redux/app/hooks';
import { selectVideo } from '@redux/slices/video/selectors';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { breakpointsWithSizes, sortAndSliceVideos } from './helpers';
import { getImagePath } from '@utils/helpers';
import { Pagination, A11y } from 'swiper/modules';
import { setFeatured } from '@redux/slices/video/slice';
import { StyledImageListItem, StyledSwiperContainer } from './styles';

const Trending = () => {
  const dispatch = useAppDispatch();
  const { trending } = useAppSelector(selectVideo);
  const sortedVideos = sortAndSliceVideos(trending);

  const handleVideoClick = (id: string) => {
    dispatch(setFeatured(id));
  };

  return (
    <StyledSwiperContainer>
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        breakpoints={breakpointsWithSizes}
        className="swiper-container"
      >
        {sortedVideos.map(({ Id, Title, CoverImage }) => (
          <SwiperSlide key={Id} onClick={() => handleVideoClick(Id)}>
            <StyledImageListItem>
              <img
                src={getImagePath(CoverImage)}
                alt={Title}
                style={{
                  width: '140px',
                  objectFit: 'cover',
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
              <ImageListItemBar title={Title} />
            </StyledImageListItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSwiperContainer>
  );
};

export default Trending;
