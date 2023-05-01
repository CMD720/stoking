import {ItemsSliceProps, Status} from "./types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchItems} from "./fetchItem";

const initialState: ItemsSliceProps = {
    items: [],
    totalCount: 0,
    status: Status.LOADING, // loading | success | error
    links:{
        self: '',
        first: '',
        last: '',
        next: '',
    },
    meta:{
        totalCount: 0,
        pageCount: 0,
        currentPage: 0,
        perPage: 0,
    }
}

export const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        setItems:(state, action: PayloadAction<ItemsSliceProps>) => {

        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchItems.fulfilled, (state, action) => {
            state.items = action.payload.items
            state.totalCount = action.payload._meta.totalCount
            state.meta = action.payload._meta
            state.status = Status.SUCCESS
            // console.log('META - ',state.meta);
            // console.log('META payload - ',action.payload._meta);
        })
        builder.addCase(fetchItems.pending, (state) => {
            state.status = Status.LOADING
            state.items = []
        })
        builder.addCase(fetchItems.rejected, (state) => {
            state.status = Status.ERROR
            state.items = []
        })
    }

})
export const {setItems} = itemSlice.actions

export default itemSlice.reducer