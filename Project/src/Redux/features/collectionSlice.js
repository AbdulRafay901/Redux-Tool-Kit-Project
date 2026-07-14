import { createAction, createSlice } from "@reduxjs/toolkit";
import { create } from "axios";
import {toast} from 'react-toastify';

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
        },
        addtoToast(){
            toast('Added To Collection', {
                 position: "top-right",
                 autoClose: 5000,
                 hideProgressBar: false,
                 closeOnClick: false,
                 pauseOnHover: true,
                 draggable: true,
                 progress: undefined,
                 theme: "light",
            });
        },
        removeItem(state, action){
           state.items = state.items.filter(i => {
               i.id !== action.payload.id
           })

           localStorage.setItem('collection', JSON.stringify(state.items))

           
        }
       
    }
})


export const {addtoCollection, addtoToast, removeItem} = collectionSlice.actions

export default collectionSlice.reducer