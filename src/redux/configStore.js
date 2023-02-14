import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { filmReducer } from './reducers/filmReducer';
import { QuanLyPhimReducer } from './reducers/QuanLyPhimReducer';


const rootReducer = combineReducers({
   filmReducer,
   QuanLyPhimReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
