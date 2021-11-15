import { createAsyncThunk } from "@reduxjs/toolkit"
import { userApi, UserType } from "../../../API/userApi"

export const addUserThunk = createAsyncThunk(
    "users/addUser",
    // Declare the type your function argument here:
    async (user: UserType) => {
        const response =  userApi.addUser(user)
        return response as  string
    }
)
