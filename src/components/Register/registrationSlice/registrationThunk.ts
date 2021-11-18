import { createAsyncThunk } from "@reduxjs/toolkit"
import { userApi, UserType } from "../../../API/userApi"
import { AppDispatch, RootState } from "../../../redux/store"

export const addUserThunk = createAsyncThunk<string, UserType, { dispatch: AppDispatch, state: RootState }>(
    "users/addUser",
    // Declare the type your function argument here:
    async (user: UserType, {dispatch, getState}) => {
        return userApi.addUser(user)
    }
)
