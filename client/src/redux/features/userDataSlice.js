import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null
}

export const userDataSlice = createSlice({
    name:"userData",
    initialState,
    reducers:{
        setUser: (state,action) =>{
            state.user = action.payload
        },
        clearUser:() => {
            return null
        }
    }
})

export const {setUser, clearUser} = userDataSlice.actions
export default userDataSlice.reducer