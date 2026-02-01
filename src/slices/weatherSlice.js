import { createSlice } from '@reduxjs/toolkit';
import { TEMPERATURE_UNITS } from '../constants/temperatureUnits';

const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
const savedUnit = localStorage.getItem('tempUnit') || TEMPERATURE_UNITS.CELSIUS;

const initialState = {
    temperatureUnits: savedUnit,
    favorites: savedFavorites,
};

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setTemperatureUnits(state, action) {
            state.temperatureUnits = action.payload;
            localStorage.setItem('tempUnit', action.payload);
        },
        toggleFavorite(state, action) {
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

export const { setTemperatureUnits, toggleFavorite } = weatherSlice.actions;

export const weatherReducer = weatherSlice.reducer;