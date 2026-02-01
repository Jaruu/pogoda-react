import { createSlice } from '@reduxjs/toolkit';

const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
const savedUnit = localStorage.getItem('tempUnit') || 'C';

const weatherSlice = createSlice({
  name: 'weather',
  initialState: { 
    unit: savedUnit, 
    favorites: savedFavorites 
  },
  reducers: {
    setUnit: (state, action) => {
      state.unit = action.payload;
      localStorage.setItem('tempUnit', action.payload);
    },
    toggleFavorite: (state, action) => {
      const cityId = action.payload;
      if (state.favorites.includes(cityId)) {
        state.favorites = state.favorites.filter(id => id !== cityId);
      } else {
        state.favorites.push(cityId);
      }
      localStorage.setItem('favorites', JSON.stringify(state.favorites)); 
    },
  },
});

export const { setUnit, toggleFavorite } = weatherSlice.actions;
export default weatherSlice.reducer;