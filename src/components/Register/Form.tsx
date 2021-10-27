import React from "react"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { useFormik } from "formik"
import * as Yup from "yup"

export const Form = () => {

    const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/

    let validationSchema = Yup.object().shape({
            name: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required(),
            last_name: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required(),
            email: Yup.string()
                .email("Invalid email address")
                .required("Email is require"),
            tel: Yup.string()
                .matches(phoneRegExp, "invalid phone number")
                .required("Please input number"),
            password: Yup.string()
                .min(10, "Must be 10 characters or more")
                .required("Password is require field"),
            repeat_password: Yup.string()
                .oneOf([Yup.ref("password"), null], "Passwords must match")
                .required("Please confirm password"),
            date: Yup.date()
        }
    )

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
        validationSchema,
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
                error={!!formik.errors.name && formik.touched.name}
                helperText={formik.touched.name && formik.errors.name}
            />

            <TextField
                {...formik.getFieldProps("last_name")}
                margin="normal"
                fullWidth
                required
                label="Last_name"
                error={!!formik.errors.last_name && formik.touched.last_name}
                helperText={formik.touched.last_name && formik.errors.last_name}
            />
            <TextField
                {...formik.getFieldProps("email")}
                margin="normal"
                fullWidth
                label="Email Address"
                error={!!formik.errors.email && formik.touched.email}
                helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
                {...formik.getFieldProps("tel")}
                margin="normal"
                fullWidth
                label="Tel number"
                error={!!formik.errors.tel && formik.touched.tel}
                helperText={formik.touched.tel && formik.errors.tel}
            />
            <TextField
                {...formik.getFieldProps("password")}
                margin="normal"
                fullWidth
                label="Password"
                type="password"
                error={!!formik.errors.password && formik.touched.password}
                helperText={formik.touched.password && formik.errors.password}
            />
            <TextField
                {...formik.getFieldProps("repeat_password")}
                margin="normal"
                fullWidth
                label="repeat_password"
                type="password"
                error={!!formik.errors.repeat_password && formik.touched.repeat_password}
                helperText={formik.touched.repeat_password && formik.errors.repeat_password}
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
