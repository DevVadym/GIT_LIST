import React from "react"
import { Route, Switch } from "react-router-dom"
import { Registration } from "../Register/Registration"
import  {HomeContainer}  from "../Home/Home"
import { Login } from "../Login/Login"
import s from "./Main.module.css"
import { MessagesContainer } from "../Messages/Messages"
import { UsersContainer } from "../Users/Users"
import { SettingsContainer } from "../Settings/Settings"

export const Main: React.FC = () => {
    return (
        <div className={s.main_container}>
            <Switch>
                <Route exact path={"/profile"} render={() => <HomeContainer/>}/>
                <Route path={"/login"} render={() => <Login/>}/>
                <Route path={"/registration"} render={() => <Registration/>}/>
                <Route path={"/messages"} render={() => <MessagesContainer/>}/>
                <Route path={"/users"} render={() => <UsersContainer/>}/>
                <Route path={"/Settings"} render={() => <SettingsContainer/>}/>
            </Switch>
        </div>
    )
}

