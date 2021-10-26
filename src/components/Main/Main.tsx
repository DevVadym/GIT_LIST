import React from "react"
import { Route, Switch } from "react-router-dom"
import { Registration } from "../Register/Registration"

export const Main: React.FC = () => {
    return (
        <Switch>
            <Route path={"/registration"} render={() => <Registration/>}/>
        </Switch>
    )
}
