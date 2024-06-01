import { createReducer } from '@reduxjs/toolkit';
import { addItem, removeItem } from './ItemsActions';

const itemsReducer = createReducer([], (builder) => {
  builder
    .addCase(addItem, (state, action) => [...state, action.payload])
    .addCase(removeItem, (state, action) => state.filter(el => el.id !== action.payload));
});

export default itemsReducer;

