import { configureStore } from '@reduxjs/toolkit';
import quizzSlice from './slices/quizzSlice';

export const store = configureStore({
    reducer: {
        quizz: quizzSlice
    },
});