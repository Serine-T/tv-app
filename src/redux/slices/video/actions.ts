import { createAsyncThunk } from '@reduxjs/toolkit';
import { TVAppData } from './types';
import { mokingDelay } from '@utils/helpers';
import data from '@assets/data/data.json'; 

export const getVideos = createAsyncThunk<TVAppData, void, { rejectValue: string }>(
  'getVideos',
  async (_, thunkAPI) => {
    try {
      await mokingDelay();
      return data; 
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to load videos');
    }
  },
);
