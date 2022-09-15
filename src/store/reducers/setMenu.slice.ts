import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
    menuOpen: false,
    classNameMenu: 'icon-menu'
};

export const setMenuSlice = createSlice({
    name: 'setMenu',
    initialState,
    reducers: {
        toggleClass(state, action: PayloadAction<boolean>) {            
            state.menuOpen = action.payload;            
        },
        iconMenu(state) {
            if (state.classNameMenu.includes('menu-open')) {
                state.classNameMenu = 'icon-menu';
                state.menuOpen = false;                
            } else {
                state.classNameMenu = 'icon-menu menu-open';
                state.menuOpen = true;                
            };
        },
        closeIconMenu(state) {
            state.classNameMenu = 'icon-menu';
        }
    }
})

export const {toggleClass, iconMenu, closeIconMenu} = setMenuSlice.actions;

export const setMenuReducer = setMenuSlice.reducer;