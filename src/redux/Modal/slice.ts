import {TModal, TStyle} from "./types";
import {createSlice} from "@reduxjs/toolkit";

const initialState: TModal = {
    modalCart: false,
    modal: false,
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        modalOnOff(state, action) {

        },
    },
})
export default modalSlice.reducer
export const {modalOnOff} = modalSlice.actions