import React from "react"
import s from "./Home.module.css"
import { User } from "../User/User"
import { withAuthentication } from "../../helpers/Redirect"

const HomePage: React.FC = () => {

    return (
        <div className={s.main_container}>
            <div>
                <User/>
            </div>
        </div>
    )
}
export const HomeContainer = withAuthentication(HomePage)
