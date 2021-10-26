import React from "react"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { useFormik } from "formik"
import * as Yup from "yup"

export const Form = () => {

    const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/

    const formik = useFormik({
        initialValues: {
            name: "",
            last_name: "",
            email: "",
            tel: "",
            password: "",
            repeat_password: "",
            date: ""
        },
        validationSchema: Yup.object().shape({
                name: Yup.string()
                    .max(15, "Must be 15 characters or less")
                    .min(6, "shortly"),
                last_name: Yup.string()
                    .max(15, "Must be 15 characters or less")
                    .min(6, "shortly")
                    .when("last_name", {
                        is: (value: string) => value?.length,
                        then: rule => rule.required()
                    }),
                email: Yup.string()
                    .email("Invalid email address")
                    .when("email", {
                        is: (value: string) => value?.length,
                        then: rule => rule.required()
                    }),
                tel: Yup.string().matches(phoneRegExp, "invalid phone number")
                    .when("tel", {
                        is: (value: string) => value?.length,
                        then: rule => rule.required()
                    }),
                password: Yup.string()
                    .min(10, "Must be 10 characters or more")
                    .when("password", {
                        is: (value: string) => value?.length,
                        then: rule => rule.required()
                    }),
                repeat_password: Yup.string()
                    .oneOf([Yup.ref("password"), null], "Passwords must match")
                    .when("repeat_password", {
                        is: (value: string) => value?.length,
                        then: rule => rule.required()
                    }),
                date: Yup.date()
            },
            [
                ["last_name", "last_name"],
                ["email", "email"],
                ["tel", "tel"],
                ["password", "password"],
                ["repeat_password", "repeat_password"],
            ]
        ),
        onSubmit: (values, e) => {
            e.resetForm()
            alert(JSON.stringify(values))
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
                {...formik.getFieldProps("name")}
                margin="normal"
                fullWidth
                label="Name"
                autoFocus
                error={!!formik.errors.name}
                helperText={formik.errors.name}
            />
            <TextField
                {...formik.getFieldProps("last_name")}
                margin="normal"
                fullWidth
                required
                label="Last_name"
                error={!!formik.errors.last_name}
                helperText={formik.errors.last_name}
            />
            <TextField
                {...formik.getFieldProps("email")}
                margin="normal"
                fullWidth
                label="Email Address"
                error={!!formik.errors.email}
                helperText={formik.errors.email}
            />
            <TextField
                {...formik.getFieldProps("tel")}
                margin="normal"
                fullWidth
                label="Tel number"
                error={!!formik.errors.tel}
                helperText={formik.errors.tel}
            />
            <TextField
                {...formik.getFieldProps("password")}
                margin="normal"
                fullWidth
                label="Password"
                type="password"
                error={!!formik.errors.password}
                helperText={formik.errors.password}
            />
            <TextField
                {...formik.getFieldProps("repeat_password")}
                margin="normal"
                fullWidth
                label="repeat_password"
                type="password"
                error={!!formik.errors.repeat_password}
                helperText={formik.errors.repeat_password}
            />
            <TextField
                {...formik.getFieldProps("date")}
                margin="normal"
                label="Birthday"
                type="date"
                fullWidth
                error={!!formik.errors.date}
                helperText={formik.errors.date}
                InputLabelProps={{
                    shrink: true
                }}
            />

            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{mt: 3, mb: 2}}
            >
                Sign Up
            </Button>
        </form>
    )
}
