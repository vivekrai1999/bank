import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    fullname: "",
    nationalID: "",
    createdAt: "",
}

const customerSlice = createSlice({
    name: "customer",
    initialState: initialState,
    reducers: {
        createCustomer:{
            prepare(fullname, nationalID){
                return {
                    payload: {fullname, nationalID}
                }
            },
            reducer(state, action){
                state.fullname = action.payload.fullname
                state.nationalID = action.payload.nationalID
                state.createdAt = new Date().toISOString
            }
        },

        updateName(state, action){
            state.fullname = action.payload.fullname
        }
    }
})

export const {createCustomer, updateName} = customerSlice.actions
export default customerSlice.reducer

