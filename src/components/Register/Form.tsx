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
        validationSchema: Yup.object({
            name: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("require"),
            last_name: Yup.string()
                .test("last_name", "Last Name test message", function (value) {
                    if (!!value) {
                        const schema = Yup.string().min(2)
                        return schema.isValidSync(value)
                    }
                    return true
                }),

            email: Yup.string()
                .email("Invalid email address")
                .required("email"),
            tel: Yup.string().matches(phoneRegExp, "invalid phone number")
                .required("tel"),
            password: Yup.string()
                .min(10, "Must be 10 characters or more")

                .required("pass")
            ,
            repeat_password: Yup.string()
                .oneOf([Yup.ref("password"), null], "Passwords must match")

                .required("rpt-pass")
            ,
            date: Yup.date()

                .required("date")

        }),
        onSubmit: values => {
            alert(JSON.stringify(values))
        }
    })


    console.log(Object.keys(formik.errors).length === 0)
    console.log(Object.keys(formik.errors))
    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
                onChange={formik.handleChange}
                value={formik.values.name}
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                error={!!formik.errors.name}
                helperText={formik.errors.name}
            />

            <TextField
                onChange={formik.handleChange}
                value={formik.values.last_name}
                margin="normal"
                required
                fullWidth
                id="last_name"
                label="Last_name"
                name="last_name"
                error={!!formik.errors.last_name}
                helperText={formik.errors.last_name}
            />
            <TextField
                onChange={formik.handleChange}
                value={formik.values.email}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                error={!!formik.errors.email}
                helperText={formik.errors.email}
            />
            <TextField
                onChange={formik.handleChange}
                value={formik.values.tel}
                margin="normal"
                required
                fullWidth
                id="tel"
                label="Tel number"
                name="tel"
                error={!!formik.errors.tel}
                helperText={formik.errors.tel}
            />
            <TextField
                onChange={formik.handleChange}
                value={formik.values.password}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                error={!!formik.errors.password}
                helperText={formik.errors.password}
            />
            <TextField
                onChange={formik.handleChange}
                value={formik.values.repeat_password}
                margin="normal"
                required
                fullWidth
                name="repeat_password"
                label="repeat_password"
                type="password"
                id="repeat_password"
                error={!!formik.errors.repeat_password}
                helperText={formik.errors.repeat_password}
            />
            <TextField
                onChange={formik.handleChange}
                value={formik.values.date}
                id="date"
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
