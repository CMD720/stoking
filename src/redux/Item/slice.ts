import {ItemsSliceProps, Status} from "./types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchItems} from "./fetchItem";

const initialState: ItemsSliceProps = {
    items: [],
    status: Status.LOADING, // loading | success | error
    links:{
        self: {href:''},
        first: {href:'https://api.stoking.ru/v1/brands?selection[filter]=[%7B%22id%22:%22used%22,%22value%22:1%7D]&expand=thumbnail.sizes&fields=id,name,slug,thumbnail.*&per-page=36&page=1&sort=-countDeal'},
        last: {href:''},
        next: {href:''},
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
            state.meta = action.payload._meta
            state.links = action.payload._links
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