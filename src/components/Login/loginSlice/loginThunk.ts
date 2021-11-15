import { createAsyncThunk } from "@reduxjs/toolkit"
import { LoginDataType, LoginResponseType, userApi } from "../../../API/userApi"

export const loginThunk = createAsyncThunk(
    "users/loginUser",
    // Declare the type your function argument here:
    async (data: LoginDataType ) => {
        const response =  userApi.getUser(data)
        return response as string | LoginResponseType
    }
)
