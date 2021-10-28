import React from "react"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Link from "@mui/material/Link"
import Box from "@mui/material/Box"
import { useFormik } from "formik"
import { useDispatch } from "react-redux"
import { loginThunk } from "./loginSlice/loginThunk"

type LoginFormPropsType = {
    style: any
}
export const LoginForm:React.FC<LoginFormPropsType> = ({style}) => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            rememberMe: false
        },

        onSubmit: (values, e) => {
            e.resetForm()
            dispatch(loginThunk(values))
        }
    })

    return(
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
                <FormControlLabel
                    control={
                        <Checkbox
                            {...formik.getFieldProps("rememberMe")}
                            value="remember"
                            color="primary"
                        />}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={style}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="#" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}