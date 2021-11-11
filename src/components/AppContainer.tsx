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
export const AppContainer: React.FC = () => {

    const isLoginUser = useSelector<RootState, boolean>(state => state.home.initUser)
    const initialize = useSelector<RootState, InitializeType>(state => state.app.initialize)
    const dispatch = useDispatch()

    const sidebar = useMemo(() => {
        if (isLoginUser) {
            return <Sidebar/>
        }
    }, [isLoginUser])

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
