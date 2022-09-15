import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
    page: 0
};

export const currentPageSlice = createSlice({
    name: 'currentPage',
    initialState,
    reducers: {
        incrementPage(state) {
            state.page++
        },
        resetCount(state) {
            state.page = 0
        },
        decrementPage(state) {
            state.page--
        },
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload
        }
    }
})

export const addContent = currentPageSlice.actions;
export const resetCount = currentPageSlice.actions;

export const currentPageReducer = currentPageSlice.reducer;