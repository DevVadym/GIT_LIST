import React, { useEffect, useMemo } from "react"
import "../common/App.css"
import { Header } from "./Header/Header"
import { Sidebar } from "./Sidebar/Sidebar"
import { Main } from "./Main/Main"
import { useDispatch } from "react-redux"
import { appThunk } from "./appThunk"
import Box from "@mui/material/Box"
import { LinearProgress } from "@mui/material"
import { homePageThunk } from "./Home/homePageSlice/homePageThunk"
import { userThunk } from "./User/UserSlice/userThunk"
import { useResize } from "../helpers/windowResize"
import { useTypedSelector } from "../helpers/useTypedSelector"

export const AppContainer: React.FC = () => {
    const {user} = useTypedSelector(state => state.userReducer)
    const {initialize} = useTypedSelector(state => state.appReducer)
    let width = useResize()
    const dispatch = useDispatch()

    const sidebar = useMemo(() => {
        if (user && width > 1025) {
            return <Sidebar/>
        }
    }, [user, width])

    useEffect(() => {
        dispatch(userThunk())
    }, [])

    useEffect(() => {
        setTimeout(() => {
            dispatch(appThunk("success"))
        }, 1500)
        dispatch(homePageThunk())
    }, [])

    const content = useMemo(() => {
        if (initialize === "false" || !initialize) {
            return <Box sx={{width: "100%"}}>
                <LinearProgress/>
            </Box>
        }
        return <div className="App">
            <Header/>
            {sidebar}
            <div className="main_container">
                <Main/>
            </div>
        </div>
    }, [initialize, sidebar])

    return content
}
