import { GET_FILM_LIST, GET_BANNER_LIST } from '../types/filmTypes';
const initialState = {
   filmList: [],
   filmBanner: [],
};

export const filmReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_FILM_LIST:
         state.filmList = action.filmList;
         return { ...state };
      case GET_BANNER_LIST:
         state.filmBanner = action.bannerList;
         return { ...state };
      default:
         return state;
   }
};
