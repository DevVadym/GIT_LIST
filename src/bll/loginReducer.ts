import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type StatusType = "loading" | "finished" | "failed" | null

export type initialStateType = {
    name: string | null
    email?: string | null
    status?: StatusType
}

const initialState: initialStateType = {
    name: null,
    email: null,
    status: null
}
const loginSlice = createSlice({
    name: "Login",
    initialState,
    reducers: {
        setStatus:(state,action:PayloadAction<StatusType>)=>{
            state.status = action.payload
        },
        isRegisteredUser: (state, action: PayloadAction<initialStateType>) => {
            let data = localStorage.getItem("data")
            let arr = [{...initialState}]

            if (data) {
                arr = JSON.parse(data)
            }
            console.log("after", arr)
            let obj = arr.find((el: any) => el.name === action.payload.name)
            if (obj?.name === action.payload.name
                && obj?.email === action.payload.email) {
                state.status = "finished"
            } else {
                state.status = "failed"
            }
        }
    }
})

// Action creators are generated for each case reducer function
export const {isRegisteredUser} = loginSlice.actions

export default loginSlice.reducer

