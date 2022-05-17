import { createSlice } from '@reduxjs/toolkit';

const init = {
    listQuizz: [],
    isLoading: true,
    exception: null,
    currentQuizz: null
}

export const quizzSlice = createSlice({
    name: 'quizz',
    initialState: init,
    reducers: {
        SET_QUIZZ: (state, action) =>
        {
            // const {listQuizz, isLoading, exception, currentQuizz} = action.payload;
            return action.payload;
        },
        SET_CURRENT_QUIZZ: (state, action) =>
        {
            state.currentQuizz = action.payload;
            return state;
        }
    },
    extraReducers: {}
});

export const { SET_QUIZZ, SET_CURRENT_QUIZZ } = quizzSlice.actions;

export default quizzSlice.reducer;