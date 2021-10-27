import React from "react"
import {Route} from "react-router-dom";
import {HomePage} from "../Home/Home";
import {Login} from "../Login/Login";
import {Registration} from "../Register/Registration";

export const Main: React.FC = () => {
    return (
        <div style={{margin:"10px"}}>
            <Route exact path={"/"} render={() => <HomePage/>}/>
            <Route path={"/login"} render={() => <Login/>}/>
            <Route path={"/registration"} render={() => <Registration/>}/>
        </div>
    )
}
