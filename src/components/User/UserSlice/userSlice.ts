import { createSlice } from "@reduxjs/toolkit"
import { userThunk } from "./userThunk"
import { UserType } from "../../../API/userApi"

export type initialStateType = {
    user: UserType | null
}

const initialState: initialStateType = {
    user: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(userThunk.fulfilled, (state, {payload}) => {
            state.user = payload
        })
    }
})

// Action creators are generated for each case reducer function
//export const {} = homePageSlice.actions

export default userSlice.reducer
