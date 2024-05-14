import { configureStore } from '@reduxjs/toolkit';
import CardsReducer from './slices/card.slice';

const store = configureStore({
    reducer: {
        cards: CardsReducer,
    },
});

export default store;
