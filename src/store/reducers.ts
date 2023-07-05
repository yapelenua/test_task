import { combineReducers } from '@reduxjs/toolkit';
import productsReducer from './products';
import sortReducer from './sort';

export const rootReducer = combineReducers({
  products: productsReducer,
  sortOption: sortReducer,
});

