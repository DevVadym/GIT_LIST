import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { Redirect } from "react-router-dom"
import s from "./Home.module.css"
import { User } from "../User/User"
import { TextField } from "@mui/material"
import { homePageThunk } from "./homePageSlice/homePageThunk"

const style = {
    mainBox: {
        bgcolor: "background.paper",
        pt: 8,
        pb: 6
    },
    mainBoxStack: {
        pt: 4
    },
    mainContainer_Cards: {py: 8}

} as const

export const HomePage: React.FC = () => {
    const isLoginUser = useSelector<RootState, boolean>(state => state.home.initUser)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(homePageThunk())
    },[isLoginUser])

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
                    <TextField id="outlined-basic" label="Post" variant="outlined" />
                </div>
                <div className={s.post_block__posts}>posts</div>
            </div>
        </div>
    )
}