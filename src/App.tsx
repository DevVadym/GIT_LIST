import React from "react"
import "./App.css"
import { Main } from "./components/Main"
import { Container } from "@mui/material"

export const App: React.FC = () => {
    return (
        <div className="App">
            <Container>
                <Main/>
            </Container>
        </div>
    )
}

