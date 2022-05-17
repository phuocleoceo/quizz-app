import { createSlice } from '@reduxjs/toolkit';

const init = {
    data: [],
    loading: true,
    exception: null
}

export const quizzSlice = createSlice({
    name: 'quizz',
    initialState: init,
    reducers: {
        SET_DATA: (state, action) =>
        {
            state.data = action.payload;
            return state;
        },
        SET_LOADING: (state, action) =>
        {
            state.loading = action.payload;
            return state;
        },
        SET_EXCEPTION: (state, action) =>
        {
            state.exception = action.payload;
            return state;
        },
        SET_QUIZZ: (state, action) =>
        {
            // const {data,loading,exception} = action.payload;
            return action.payload;
        }
    },
    extraReducers: {}
});

export const { SET_DATA, SET_LOADING, SET_EXCEPTION, SET_QUIZZ } = quizzSlice.actions;

export default quizzSlice.reducer;