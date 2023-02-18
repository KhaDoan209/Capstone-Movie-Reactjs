import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { filmReducer } from './reducers/filmReducer';
import { QuanLyDatVeReducer } from './reducers/QLDatVeReducer';
import { QuanLyPhimReducer } from './reducers/QuanLyPhimReducer';
import { quanLyNguoiDungReducer } from './reducers/quanLyNguoiDungReducer';
import { rapPhimReducer } from './reducers/rapPhimReducer';
import { LoadingReducer } from './reducers/LoadingReducer';


const rootReducer = combineReducers({
   filmReducer,
   QuanLyPhimReducer,
   QuanLyDatVeReducer,
   rapPhimReducer,
   quanLyNguoiDungReducer,
   LoadingReducer,   
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
