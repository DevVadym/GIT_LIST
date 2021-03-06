import React from "react"
import Avatar from "@mui/material/Avatar"
import CssBaseline from "@mui/material/CssBaseline"
import Link from "@mui/material/Link"
import Box from "@mui/material/Box"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { LoginForm } from "./loginForm"
import { Redirect } from "react-router-dom"
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

const style = {
    mainBox: {
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    mainBox_avatar: {
        m: 1, bgcolor: "secondary.main"
    },
    mainFormBox: {
        mt: 1
    },
    mainFormBox_button: {
        mt: 3,
        mb: 2
    },
    mainCopyright: {
        mt: 8,
        mb: 4
    }

} as const

export const Login: React.FC = () => {
    const {status} = useTypedSelector(state => state.loginReducer)
    const isLoginUser = useTypedSelector(state => state.homePageReducer.initUser)

    if (status === "finished" && isLoginUser) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline/>
                    <Box
                        sx={style.mainBox}
                    >
                        <Avatar sx={style.mainBox_avatar}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        {status === "failed" && <div>Wrong email or password</div>}
                        <LoginForm style={style.mainFormBox_button}/>
                    </Box>
                    <Copyright sx={style.mainCopyright}/>
                </Container>
            </ThemeProvider>
        </div>
    )
}