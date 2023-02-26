import { GET_FILM_LIST, GET_BANNER_LIST } from '../types/filmTypes';
import { LAY_THONG_TIN_PHIM_THEO_MA } from '../types/filmTypes';
const initialState = {
   filmList: [],
   filmBanner: [],
   thongTinFilm: {},
};

export const filmReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_FILM_LIST:
         state.filmList = action.filmList;
         console.log(state.filmList);
         return { ...state };
      case GET_BANNER_LIST:
         state.filmBanner = action.bannerList;
         return { ...state };
      case LAY_THONG_TIN_PHIM_THEO_MA:
         state.thongTinFilm = action.filmDetail;
         return { ...state };
      default:
         return state;
   }
};
