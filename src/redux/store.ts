import {combineReducers, configureStore} from "@reduxjs/toolkit";
import modalSlice from './Modal/slice'
import itemSlice from "./Item/slice";
import cartSlice from "./Cart/slice";

const rootReducer = combineReducers({
    modal: modalSlice,
    item: itemSlice,
    cart: cartSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
