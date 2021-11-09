import { createSlice } from "@reduxjs/toolkit"
import { userThunk } from "./userThunk"


export type initialStateType = {

}

const initialState: initialStateType = {

}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(userThunk.fulfilled, (state, {payload}) => {

        })
    }
})

// Action creators are generated for each case reducer function
//export const {} = homePageSlice.actions

export default userSlice.reducer
