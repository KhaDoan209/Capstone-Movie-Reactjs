import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { filmReducer } from './reducers/filmReducer';
import { rapPhimReducer } from './reducers/rapPhimReducer';


const rootReducer = combineReducers({
   filmReducer,
   rapPhimReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
