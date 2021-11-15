import { createSlice } from "@reduxjs/toolkit"
import { addUserThunk } from "./registrationThunk"

export type RegistrationSuccessType = "success" | "false" | null
export type initialStateType = {
    isRegistrationSuccess: RegistrationSuccessType
    error: string | null
}

const initialState: initialStateType = {
    isRegistrationSuccess: null,
    error: null
}

const registerSlice = createSlice({
    name: "registration",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addUserThunk.fulfilled, (state, {payload}) => {
            let error = "User already registered"
            let success = "User successfully register"
            if (payload === error) {
                state.isRegistrationSuccess = "false"
                state.error = error

            }
            if (payload === success) {
                state.isRegistrationSuccess = "success"
                state.error = null
            }
        })
    }
})

// Action creators are generated for each case reducer function
//export const {} = registerSlice.actions

export default registerSlice.reducer