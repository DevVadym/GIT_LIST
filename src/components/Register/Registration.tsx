import React, { useEffect, useMemo, useState } from "react"
import CssBaseline from "@mui/material/CssBaseline"
import Link from "@mui/material/Link"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Form } from "./Form"
import { useTypedSelector } from "../../helpers/useTypedSelector"
import { Redirect } from "react-router-dom"
import { useDispatch } from "react-redux"
import { clearIsRegSucc } from "./registrationSlice/registerSlice"
import s from "./Registration.module.css"

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
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(clearIsRegSucc())
    }, [])

    const userRegisteredStatus = useMemo(() => {
        if (isRegister === "false") {
            setUserRegStatus("User already registered, please enter new data")
            return <div className={s.un_register_user}>{userRegStatus}</div>
        }
        if (isRegister === "success") {
            setUserRegStatus("Registered success, please Sign In")
            return <div className={s.register_user}>{userRegStatus}</div>
        }
    }, [isRegister, userRegStatus])

    if (isRegister === "success") {
        return <Redirect to={"/login"}/>
    }

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