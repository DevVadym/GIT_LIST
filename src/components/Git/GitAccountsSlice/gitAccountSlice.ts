import { createSlice } from "@reduxjs/toolkit"
import { gitThunk } from "./gitThunk"

export type AccountType = {
    name: string
    last_name: string
    email: string
    nik_name: string
}

export type initialStateType = {
    accounts: AccountType[]
}

const initialState: initialStateType = {
    accounts: []
}

const gitSlice = createSlice({
    name: "Login",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(gitThunk.fulfilled, (state, {payload}) => {

        })
    }
})

// Action creators are generated for each case reducer function
//export const {} = loginSlice.actions

export default gitSlice.reducer

