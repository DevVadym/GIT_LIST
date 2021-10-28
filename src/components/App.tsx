import React from "react"
import "../common/App.css"
import { Main } from "./Main/Main"
import { Container } from "@mui/material"
import { Header } from "./Header/Header"

export const App: React.FC = () => {
    return (
        <div className="App">
            <Header/>
            <Container>
                <Main/>
            </Container>
        </div>
    )
}
