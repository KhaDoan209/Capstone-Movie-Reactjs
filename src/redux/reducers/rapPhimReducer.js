import { GET_RAP_FILM, GET_LICH_CHIEU_HE_THONG_RAP } from '../types/rapTypes';
const initialState = {
   heThongRap: [],
   lichChieuHeThongRap: [],
};

export const rapPhimReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_RAP_FILM:
         state.heThongRap = action.rapList;
         return { ...state };
      case GET_LICH_CHIEU_HE_THONG_RAP:
         state.lichChieuHeThongRap = action.lichChieuHeThongRap;
         return { ...state };
      default:
         return state;
   }
};
