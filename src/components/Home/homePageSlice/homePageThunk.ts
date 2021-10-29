import { createAsyncThunk } from "@reduxjs/toolkit"
import { userApi } from "../../../API/userApi"

export const homePageThunk = createAsyncThunk(
    "home/initUser",
    // Declare the type your function argument here:
    async () => {
        const res = userApi.initializeUser()
        return res as boolean
    }
)
