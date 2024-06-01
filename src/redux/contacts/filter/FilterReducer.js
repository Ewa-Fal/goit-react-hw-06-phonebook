import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './FilterActions';

const initialState = ''; // Domyślny stan

const filterReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeFilter, (state, action) => action.payload);
});

export default filterReducer;

