import { SET_CHI_TIET_PHIM } from "../types/filmTypes"

const stateDefault = {
    filmDetail: {}
}

export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_CHI_TIET_PHIM: {
            state.filmDetail = action.filmDetail;
            return {...state}
        }

        default:
            return state
    }

}