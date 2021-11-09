import { createAsyncThunk } from "@reduxjs/toolkit"
import { userApi } from "../../../API/userApi"

export const userThunk = createAsyncThunk(
    "home/initUser",
    // Declare the type your function argument here:
    async () => {

    }
)
