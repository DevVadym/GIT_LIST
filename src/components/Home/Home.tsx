import React from "react"
import {  useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { Redirect } from "react-router-dom"
import s from "./Home.module.css"
import { User } from "../User/User"
import { TextField } from "@mui/material"

export const HomePage: React.FC = () => {
    const isLoginUser = useSelector<RootState, boolean>(state => state.home.initUser)

    if (!isLoginUser) {
        return <Redirect to={"/login"}/>
    }

    return (
        <div className={s.main_container}>
            <div>
                <User/>
            </div>
            <div className={s.post_block}>
                <div className={s.post_block__input}>
                    <TextField id="outlined-basic" label="Post" variant="outlined"/>
                </div>
                <div className={s.post_block__posts}>posts</div>
            </div>
        </div>
    )
}