import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
   carouselArray: [],
};

const carouselReducer = createSlice({
   name: 'carouselReducer',
   initialState,
   reducers: {
      pushCarouselToReducer: (state, action) => {
         state.carouselArray = action.payload;
      },
   },
});

export const { pushCarouselToReducer } = carouselReducer.actions;

export default carouselReducer.reducer;
