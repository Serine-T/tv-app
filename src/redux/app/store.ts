import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import video from '@redux/slices/video/slice';

export const store = configureStore({
  reducer: { 
    video
   },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;