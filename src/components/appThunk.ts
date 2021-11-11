import { createAsyncThunk } from "@reduxjs/toolkit"
import { InitializeType } from "./appSlice"

export const appThunk = createAsyncThunk(
    "app/initApp",
    // Declare the type your function argument here:
    async (status: InitializeType) => {
        return status
    }
)
