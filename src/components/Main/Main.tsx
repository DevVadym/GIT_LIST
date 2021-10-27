import React from "react"
import { Route, Switch } from "react-router-dom"
import { Registration } from "../Register/Registration"
import { HomePage } from "../Home/Home"
import { Login } from "../Login/Login"

export const Main: React.FC = () => {
    return (
        <Switch>
            <Route exact path={"/"} render={() => <HomePage/>}/>
            <Route path={"/login"} render={() => <Login/>}/>
            <Route path={"/registration"} render={() => <Registration/>}/>
        </Switch>
    )
}
