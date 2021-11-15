import React, { ComponentType, FC } from "react"
import { Redirect } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"

export const withAuthentication = <P extends any>(
    Component: ComponentType<P>
): FC<P> => (props) => {
    const isLoginUser = useSelector<RootState, boolean>(state => state.home.initUser)
    if (isLoginUser) {
        return <Component {...props} />
    }
    return (
        <Redirect
            to={{
                pathname: "/login"
            }}
        />
    )
}

