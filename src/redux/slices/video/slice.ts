import { createSlice } from '@reduxjs/toolkit';
import { IState } from './types';
import { getVideos } from './actions';

const initialState: IState = {
  isLoading: false,
  trending: [],
  featured: null,
  lastViewed: sessionStorage.getItem('lastViewed'),
  errorMessage: null,
};

const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder.addCase(getVideos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getVideos.fulfilled, (state, { payload }) => {
      console.log('payload', payload);
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

export default videoSlice.reducer;
