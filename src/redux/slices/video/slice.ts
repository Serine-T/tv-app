import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IState } from './types';
import { getVideos } from './actions';

const lastViewed = sessionStorage.getItem('lastViewed')
  ? JSON.parse(sessionStorage.getItem('lastViewed') as string)
  : null;

const initialState: IState = {
  isLoading: false,
  trending: [],
  featured: null,
  lastViewed: lastViewed || null,
  errorMessage: null,
  isPlay: false,
};

const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: { 
    setFeatured: (state, action: PayloadAction<string>) => { 
      const id = action.payload;
      const featuredVideo = state.trending.find(video => video.Id === id);
      if (featuredVideo) {
        state.featured = featuredVideo; 
        state.lastViewed = featuredVideo;
        state.isPlay = true;
        sessionStorage.setItem('lastViewed', JSON.stringify(featuredVideo));
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getVideos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getVideos.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.featured = payload.Featured;
      state.trending = payload.TendingNow;
    });
    builder.addCase(getVideos.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.errorMessage = payload;
    });
  },
});

export const { setFeatured } = videoSlice.actions;

export default videoSlice.reducer;
