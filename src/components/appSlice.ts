import { createSlice } from "@reduxjs/toolkit"
import { appThunk } from "./appThunk"

type InitializeType = "success" | "false" | null

export type initialStateType = {
    initialize: InitializeType
}

const initialState: initialStateType = {
    initialize: null,
}

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(appThunk.fulfilled, (state, {payload}) => {

        })
    }
})

// Action creators are generated for each case reducer function
//export const {} = appSlice.actions

export default appSlice.reducer