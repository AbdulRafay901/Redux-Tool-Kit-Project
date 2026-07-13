import { configureStore } from "@reduxjs/toolkit";
import SearchReducer from './features/searchSlice';
import collectionSlice from "./features/collectionSlice";


export const store = configureStore({
    reducer:{
        search:SearchReducer,
        collection:collectionSlice
    }
})