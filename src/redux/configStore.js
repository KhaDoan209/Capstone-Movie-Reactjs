import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { filmReducer } from './reducers/filmReducer';

const rootReducer = combineReducers({
   filmReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
