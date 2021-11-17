import { createAsyncThunk } from "@reduxjs/toolkit"
import { gitApi } from "../../../API/gitApi"
import { AccountType } from "./gitAccountSlice"

export const gitThunk = createAsyncThunk(
    "account/gitAccount",
    // Declare the type your function argument here:
    async (data: AccountType) => {
        let res = gitApi.getAccount(data.nik_name)
        return res
    }
)