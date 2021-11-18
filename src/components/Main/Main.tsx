import React, { useCallback } from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import { Registration } from "../Register/Registration"
import { HomeContainer } from "../Home/Home"
import { Login } from "../Login/Login"
import s from "./Main.module.css"
import { UsersContainer } from "../Users/Users"
import { SettingsContainer } from "../Settings/Settings"
import { useTypedSelector } from "../../helpers/useTypedSelector"
import { GitAccountsContainer } from "../Git/GitAccounts"
import { UpWorkContainer } from "../UpWork/UpWork"

export const Main: React.FC = () => {

    const {user} = useTypedSelector(state => state.userReducer)
    const style = useCallback(() => {
        if (user) {
            return s.main_container
        }
        return s.main_container_logout
    }, [user])

    return (
        <div className={style()}>
            <Switch>
                <Route exact path={"/profile"} render={() => <HomeContainer/>}/>
                <Route path={"/upwork"} render={() => <UpWorkContainer/>}/>
                <Route path={"/login"} render={() => <Login/>}/>
                <Route path={"/registration"} render={() => <Registration/>}/>
                <Route path={"/gitAccounts"} render={() => <GitAccountsContainer/>}/>
                <Route path={"/users"} render={() => <UsersContainer/>}/>
                <Route path={"/Settings"} render={() => <SettingsContainer/>}/>
                <Redirect from={"*"} to={"/profile"}/>
            </Switch>
        </div>
    )
}

