import React  from "react"
import { Route, Switch } from "react-router-dom"
import { Login } from "./Login"
import { Profile } from "./Profile"

export const Main: React.FC = () => {
    return (
        <div>
            <Switch>
                <Route exact path={"/"} render={() => <Login/>}/>
                <Route path={"/profile"} render={() => <Profile/>}/>
            </Switch>
        </div>
    )
}
