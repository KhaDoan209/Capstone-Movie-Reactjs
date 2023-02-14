import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { filmReducer } from './reducers/filmReducer';
import { QuanLyDatVeReducer } from './reducers/QLDatVeReducer';
import { QuanLyPhimReducer } from './reducers/QuanLyPhimReducer';


const rootReducer = combineReducers({
   filmReducer,
   QuanLyPhimReducer,
   QuanLyDatVeReducer,

});

export const store = createStore(rootReducer, applyMiddleware(thunk));
