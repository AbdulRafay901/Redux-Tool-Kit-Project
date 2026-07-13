import { createAction, createSlice } from "@reduxjs/toolkit";
import { create } from "axios";


const initialState = {
    items: JSON.parse(localStorage.getItem('collection')) || []
}

const collectionSlice = createSlice({
    name:'collection',
    initialState,
    reducers:{
        addtoCollection(state,action){
            let duplicate = state.items.find(item => {
                item.id === action.payload.id 
            })
            if(!duplicate){
                 state.items.push(action.payload);
                 localStorage.setItem('collection', JSON.stringify(state.items))
            }
        }
    }
})


export const {addtoCollection} = collectionSlice.actions

export default collectionSlice.reducer