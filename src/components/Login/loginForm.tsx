import React, { useMemo } from "react"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import { useFormik } from "formik"
import { useDispatch } from "react-redux"
import { loginThunk } from "./loginSlice/loginThunk"
import { NavLink } from "react-router-dom"
import { homePageThunk } from "../Home/homePageSlice/homePageThunk"
import { useCookies } from "react-cookie"

type LoginFormPropsType = {
    style: any
}
export const LoginForm: React.FC<LoginFormPropsType> = ({style}) => {
    const dispatch = useDispatch()
    const [cookies, setCookie] = useCookies(['user'])

    const formik = useFormik({
        initialValues: {
            email: cookies.user? cookies.user.email: "",
            password: cookies.user? cookies.user.password: "",
            rememberMe: false
        },

        onSubmit: (values, e) => {
            e.resetForm()
            dispatch(loginThunk(values))
            dispatch(homePageThunk())
            if (values.rememberMe){
                setCookie("user", values, {path:"/", maxAge: 3600})
            }
        }
    })

    const checkBox = useMemo(()=>{
        if (!cookies.user) {
            return <FormControlLabel
                control={
                    <Checkbox
                        {...formik.getFieldProps("rememberMe")}
                        value="remember"
                        color="primary"
                    />}
                label="Remember me"
            />
        }
    },[cookies.user, formik])

    return (
        <>
            <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={style.mainFormBox}>
                <TextField
                    {...formik.getFieldProps("email")}
                    margin="normal"
                    required
                    fullWidth
                    label="Email Address"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    {...formik.getFieldProps("password")}
                    margin="normal"
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
                {checkBox}
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={style}
                    disabled={formik.values.password.length < 10}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                        <NavLink to={"#"} style={{fontSize: "0.875rem", textDecoration: "none", color: "#1976d2"}}>
                            Forgot password?
                        </NavLink>
                    </Grid>
                    <Grid item>
                        <NavLink to={"/registration"}
                                 style={{fontSize: "0.875rem", textDecoration: "none", color: "#1976d2"}}>
                            {"Don't have an account? Sign Up"}
                        </NavLink>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}