import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    worker: [],
}

const workerSlice = createSlice({
    name: 'workerData',
    initialState,
    reducers: {
        setWorker:(state,action) => {
            state.worker = action.payload
        },
        deleteWorker: (state) => {
            state.worker = []
        }
    }
})

export const {setWorker, deleteWorker} = workerSlice.actions
export default workerSlice.reducer
