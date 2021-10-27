import React from "react"
import "./App.css"
import { Main } from "./components/Main/Main"
import { Container } from "@mui/material"
import { Header } from "./components/Header/Header"

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
