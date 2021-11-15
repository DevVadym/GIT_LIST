import { createAsyncThunk } from "@reduxjs/toolkit"
import { userApi, UserType } from "../../../API/userApi"

export const userThunk = createAsyncThunk(
    "home/initUser",
    // Declare the type your function argument here:
    async () => {
        const res = userApi.setUser()
        return res as UserType | null
    }
)
