import { Video } from "@redux/slices/video/types";

export const sortAndSliceVideos = (videos: Video[], limit: number = 50): Video[] => {
  return [...videos]
    .filter(video => typeof video.Date === 'string' && !isNaN(Date.parse(video.Date)))
    .sort((a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime())
    .slice(0, limit);
};


export const breakpointsWithSizes = {
    300: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
    400: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
    500: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  640: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 5,
    spaceBetween: 30,
  },
  1024: {
    slidesPerView: 7,
    spaceBetween: 40,
  },
  1280: {
    slidesPerView:8,
    spaceBetween: 25,
  },
};