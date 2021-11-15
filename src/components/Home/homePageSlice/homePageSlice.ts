import { createSlice } from "@reduxjs/toolkit"
import { homePageThunk } from "./homePageThunk"

export type initialStateType = {
    initUser: boolean
}

const initialState: initialStateType = {
    initUser: false
}
const homePageSlice = createSlice({
    name: "home",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(homePageThunk.fulfilled, (state, {payload}) => {
            state.initUser = payload
        })
    }
})

// Action creators are generated for each case reducer function
//export const {} = homePageSlice.actions

export default homePageSlice.reducer
