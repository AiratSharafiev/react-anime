import { combineReducers, configureStore, getDefaultMiddleware, ThunkAction, Action } from "@reduxjs/toolkit";
import { dataApi } from "../services/DataServices";
import { currentPageReducer } from "./reducers/currentPage.slice";
import { currentGenreReducer } from './reducers/currentGenre.slice';
import { setMenuReducer } from './reducers/setMenu.slice';

const rootReducer = combineReducers({
    [dataApi.reducerPath]: dataApi.reducer,
    currentPageReducer,
    currentGenreReducer,
    setMenuReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dataApi.middleware)
    })
};

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']