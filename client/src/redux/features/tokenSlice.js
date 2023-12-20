import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null
}

export const tokenSlicer = createSlice({
    name:"token",
    initialState,
    reducers:{
        setToken: (state,action) =>{
            state.user = action.payload
        },
        clearToken:() => {
            return null
        }
    }
})

export const {setToken, clearToken} = tokenSlicer.actions
export default tokenSlicer.reducer