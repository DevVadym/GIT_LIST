import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../bll/store"
import { StatusType } from "../bll/loginReducer"
import { Redirect } from "react-router-dom"

export const Profile: React.FC = () => {
    const status = useSelector<RootState, StatusType>(state => state.login.status ? state.login.status : null)

    if (!status || status === "failed"){
        return <Redirect to={"/"}/>
    }

        return (
            <div>Profile</div>
        )
}