import { configureStore } from "@reduxjs/toolkit"
import loginReducer from "../components/Login/loginSlice/loginSlice"
import appReducer from "../components/appSlice"
import registerReducer from "../components/Register/registrationSlice/registerSlice"
import homePageReducer from "../components/Home/homePageSlice/homePageSlice"
import userReducer from "../components/User/UserSlice/userSlice"

export const store = configureStore({
    reducer: {
        login: loginReducer,
        app: appReducer,
        registration: registerReducer,
        home: homePageReducer,
        user: userReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

//@ts-ignore
window.store = store
