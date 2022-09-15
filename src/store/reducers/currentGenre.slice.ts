import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    genre: 'anime'
};

export const currentGenreSlice = createSlice({
    name: 'currentGenre',
    initialState,
    reducers: {        
        setCurrentGenre(state, action: PayloadAction<string>) {
            state.genre = action.payload
        }
    }
})

export const {setCurrentGenre} = currentGenreSlice.actions;

export const currentGenreReducer = currentGenreSlice.reducer;