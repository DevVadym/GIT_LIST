import React, { useCallback } from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import { Registration } from "../Register/Registration"
import { HomeContainer } from "../Home/Home"
import { Login } from "../Login/Login"
import s from "./Main.module.css"
import { MessagesContainer } from "../Messages/Messages"
import { UsersContainer } from "../Users/Users"
import { SettingsContainer } from "../Settings/Settings"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { UserType } from "../../API/userApi"

export const Main: React.FC = () => {
    const user = useSelector<RootState, UserType | null>(state => state.user.user)

    const style = useCallback(() => {
        if (user) {
            return s.main_container
        }
        return s.main_container_logout
    }, [user])

    return (
        <div className={style()}>
            <div>
                <Switch>
                    <Route exact path={"/profile"} render={() => <HomeContainer/>}/>
                    <Route path={"/login"} render={() => <Login/>}/>
                    <Route path={"/registration"} render={() => <Registration/>}/>
                    <Route path={"/messages"} render={() => <MessagesContainer/>}/>
                    <Route path={"/users"} render={() => <UsersContainer/>}/>
                    <Route path={"/Settings"} render={() => <SettingsContainer/>}/>
                    <Redirect from={"*"} to={"/profile"}/>
                </Switch>
            </div>
        </div>
    )
}

