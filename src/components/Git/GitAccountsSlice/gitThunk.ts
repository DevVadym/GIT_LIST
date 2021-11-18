import { createAsyncThunk } from "@reduxjs/toolkit"
import { gitApi } from "../../../API/gitApi"
import { AccountType } from "./gitAccountSlice"

export const gitThunk = createAsyncThunk(
    "account/gitAccount",
    // Declare the type your function argument here:
    async (payload: AccountType) => {
        let {data} = await gitApi.getAccountEvents(payload.nik_name)

        // 1st step
        // data = [], length = 30
        // length = 30 -> ...
        // length < 30 -> end
        // (while loop or recursion)

        // 2 step:
        // group all array items by created_at
        // count events amount by date (created_at)

        // example:
        // 16.11.2021 - 2
        // 17.11.2021 - 5
        // 18.11.2021 - ...

        // 3 step:
        // build a chart where X axis - dates, Y axis - events amount
        // recharts.org
        return {
            payload: data
        }

    }
)