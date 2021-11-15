import { createSlice } from "@reduxjs/toolkit"
import { loginThunk } from "./loginThunk"

export type StatusType = "loading" | "finished" | "failed" | null

export type initialStateType = {
    email: string | null
    password: string | null
    rememberMe: boolean | null
    status: StatusType
}

const initialState: initialStateType = {
    password: null,
    email: null,
    rememberMe: null,
    status: null
}

const loginSlice = createSlice({
    name: "Login",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginThunk.fulfilled, (state, {payload}) => {
            let error = "Failed login"

            if (payload === error) {
                state.status = "failed"
            }else{
                if (typeof payload !== "string") {
                    state.email = payload.user.email
                    state.password = payload.user.password? payload.user.password: ""
                    state.rememberMe = payload.rememberMe
                    state.status = "finished"
                }
            }
        })
    }
})

// Action creators are generated for each case reducer function
//export const {} = loginSlice.actions

export default loginSlice.reducer

