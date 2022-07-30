import { configureStore, createSlice } from "@reduxjs/toolkit";
import json_data from './data';

const cart = createSlice({

    name: '장바구니',
    initialState:[],
    reducers : {
        add(state, action) {  
        const a = state.findIndex((val) => val.id === action.payload)

                state[a].count += 1
            },
        addCart(state, action) {
        const a = state.findIndex((val)=>val.id === action.payload.id)

            if(a === -1 ? true:false  ) {
                state.push(action.payload)
            }
            else{
                state[a].count += 1
            }
        }
    }
})

export let { add, addCart } = cart.actions




export default configureStore({
    reducer: {
        cart : cart.reducer
    }
})