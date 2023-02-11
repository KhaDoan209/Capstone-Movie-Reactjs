import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   filmList: [],
};

const filmReducer = createSlice({
   name: 'filmReducer',
   initialState,
   reducers: {
      pushFilmListToReducer: (state, action) => {
         state.filmList = action.payload;
      },
   },
});

export const { pushFilmListToReducer } = filmReducer.actions;

export default filmReducer.reducer;
