import React, { useEffect, useMemo } from "react"
import "../common/App.css"
import { Header } from "./Header/Header"
import { Sidebar } from "./Sidebar/Sidebar"
import { Main } from "./Main/Main"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { appThunk } from "./appThunk"
import { InitializeType } from "./appSlice"
import Box from "@mui/material/Box"
import { LinearProgress } from "@mui/material"
import { homePageThunk } from "./Home/homePageSlice/homePageThunk"
import { userThunk } from "./User/UserSlice/userThunk"
import { UserType } from "../API/userApi"
export const AppContainer: React.FC = () => {
    const initialize = useSelector<RootState, InitializeType>(state => state.app.initialize)
    const user = useSelector<RootState, UserType | null>(state => state.user.user)

    const dispatch = useDispatch()

    const sidebar = useMemo(() => {
        if (user) {
            return <Sidebar/>
        }
    }, [user])

    useEffect(() => {
        dispatch(userThunk())
    }, [])

    useEffect(() => {
        setTimeout(() => {
            dispatch(appThunk("success"))
        }, 1500)
        dispatch(homePageThunk())
    },[])

    if (initialize === "false" || !initialize ) {
        return <Box sx={{width: "100%"}}>
            <LinearProgress/>
        </Box>
    }

    return (
        <div className="App">
            <Header/>
            {sidebar}
            <div className="main_container">
                <Main/>
            </div>
        </div>
    )
}
