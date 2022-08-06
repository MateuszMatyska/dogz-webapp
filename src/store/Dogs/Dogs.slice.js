import {createSlice} from '@reduxjs/toolkit';

export const dogsSlice = createSlice({
  name: 'Dogs',
  initialState: {
    dogs: [],
  },
  reducers: {
    addDog: (state, action) => {
      state.dogs.push(action.payload);
    },
    removeDog: (state, action) => {
      state.dogs.filter((dog, i) => dog !== action.payload);
    },
  },
});

export const {addDog, removeDog} = dogsSlice.actions;

export const getDogs = state => state.dogs.dogs;

export default dogsSlice.reducer;
