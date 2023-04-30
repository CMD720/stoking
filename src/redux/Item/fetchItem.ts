import {createAsyncThunk} from "@reduxjs/toolkit";
import {TItem} from "./types";
import axios from "axios";

export const fetchItems = createAsyncThunk<any>(
    'items/fetchItemsStatus',
    // async (params,thunkAPI) => {
    async () => {
        // const {category,  search} = params
        const {data} = await axios.get<any>(
            `https://api.stoking.ru/v1/brands?selection[filter]=[%7B%22id%22:%22used%22,%22value%22:1%7D]&expand=thumbnail.sizes&fields=id,name,slug,thumbnail.*&per-page=36&page=1&sort=-countDeal`)
        // console.log(thunkAPI);
        console.log(data);
        console.log(data._meta);
        console.log(data.items[0]);
        console.log(data.items[0].thumbnail.sizes[0].path);

        return data
    }
)