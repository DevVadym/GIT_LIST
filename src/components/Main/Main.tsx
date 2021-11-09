import React from "react"
import { Route, Switch } from "react-router-dom"
import { Registration } from "../Register/Registration"
import { HomePage } from "../Home/Home"
import { Login } from "../Login/Login"
import s from "./Main.module.css"

export const Main: React.FC = () => {
    return (
        <div className={s.main_container}>
            <Switch>
                <Route exact path={"/"} render={() => <HomePage/>}/>
                <Route path={"/login"} render={() => <Login/>}/>
                <Route path={"/registration"} render={() => <Registration/>}/>
            </Switch>
        </div>

    )
}
