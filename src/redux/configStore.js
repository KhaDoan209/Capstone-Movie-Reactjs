import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { filmReducer } from './reducers/filmReducer';
import { quanLyNguoiDungReducer } from './reducers/quanLyNguoiDungReducer';
import { rapPhimReducer } from './reducers/rapPhimReducer';
import { QuanLyPhimReducer } from './reducers/QuanLyPhimReducer';
import { LoadingReducer } from './reducers/LoadingReducer';
import { QuanLyDatVeReducer } from './reducers/QLDatVeReducer';


const rootReducer = combineReducers({
   filmReducer,
   rapPhimReducer,
   quanLyNguoiDungReducer,
   QuanLyPhimReducer,
   LoadingReducer,
   QuanLyDatVeReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
