import React from "react"
import "../common/App.css"
import { Header } from "./Header/Header"
import { Sidebar } from "./Sidebar/Sidebar"
import { Main } from "./Main/Main"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"

export const AppContainer: React.FC = () => {

    const isLoginUser = useSelector<RootState, boolean>(state => state.home.initUser)

    return (
        <div className="App">
            <Header/>
            {isLoginUser && <Sidebar/>}
            <div className="main_container">
               <Main/>
            </div>
        </div>
    )
}
