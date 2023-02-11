import { configureStore } from '@reduxjs/toolkit';
import carouselReducer from './reducers/carouselReducer';
import filmReducer from './reducers/filmReducer';
const store = configureStore({
   reducer: {
      carousel: carouselReducer,
      film: filmReducer,
   },
});

export default store;
