import React, { ComponentType, FC } from "react"
import { Redirect } from "react-router-dom"
import { useTypedSelector } from "./useTypedSelector"

export const withAuthentication = <P extends any>(
    Component: ComponentType<P>
): FC<P> => (props) => {
    const isLoginUser = useTypedSelector(state => state.homePageReducer.initUser)
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

