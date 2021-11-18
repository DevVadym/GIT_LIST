import React, { useEffect, useMemo, useState } from "react"
import CssBaseline from "@mui/material/CssBaseline"
import Link from "@mui/material/Link"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Form } from "./Form"
import { Redirect, useHistory } from "react-router-dom"
import { Button } from "@mui/material"
import { useTypedSelector } from "../../helpers/useTypedSelector"

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    )
}

const theme = createTheme()

export const Registration: React.FC = () => {

    const isRegister = useTypedSelector(state => state.registerReducer.isRegistrationSuccess)
    const [userRegStatus, setUserRegStatus] = useState("")

    const userRegisteredStatus = useMemo(() => {
        if (isRegister === "false") {
            setUserRegStatus("User already registered, please enter new data")
            return <div style={{color: "red"}}>{userRegStatus}</div>
        }
        if (isRegister === "success") {
            setUserRegStatus("Registered success, please Sign In")
            return <div style={{color: "blue"}}>{userRegStatus}</div>
        }
    }, [isRegister, userRegStatus])

    return (
        <div style={{display: "flex"}}>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth={"xs"}>
                    <CssBaseline/>
                    <Box
                        sx={{
                            marginTop: 8,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        {userRegisteredStatus}
                        <Form/>
                    </Box>
                    <Copyright sx={{mt: 8, mb: 4}}/>
                </Container>
            </ThemeProvider>
        </div>
    )
}