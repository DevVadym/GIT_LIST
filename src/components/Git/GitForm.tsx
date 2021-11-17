import React from "react"
import s from "./GitAccounts.module.css"
import { Button, TextField } from "@mui/material"
import * as Yup from "yup"
import { useFormik } from "formik"
import { useDispatch } from "react-redux"
import { gitThunk } from "./GitAccountsSlice/gitThunk"


type GitFormPropsType = {
    closeForm: () => void
}
export const GitForm: React.FC<GitFormPropsType> = ({closeForm}) => {

    const dispatch = useDispatch()
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
            nik_name: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required()
        }
    )

    const formik = useFormik({
        initialValues: {
            name: "",
            last_name: "",
            email: "",
            nik_name: ""
        },
        validationSchema,
        onSubmit: (values, e) => {
            e.resetForm()
            dispatch(gitThunk(values))
            closeForm()
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} className={s.form}>
            <div className={s.form_inputs}>
                <TextField
                    {...formik.getFieldProps("name")}
                    label={"Name"}
                    margin={"normal"}
                    required
                    error={!!formik.errors.name && formik.touched.name}
                    helperText={formik.errors.name && formik.errors.name}
                />
                <TextField
                    {...formik.getFieldProps("last_name")}
                    label={"Last Name"}
                    margin={"normal"}
                    required
                    error={!!formik.errors.last_name && formik.touched.last_name}
                    helperText={formik.errors.last_name && formik.errors.last_name}
                />
                <TextField
                    {...formik.getFieldProps("email")}
                    label={"Email"}
                    margin={"normal"}
                    required
                    error={!!formik.errors.email && formik.touched.email}
                    helperText={formik.errors.email && formik.errors.email}
                />
                <TextField
                    {...formik.getFieldProps("nik_name")}
                    label={"Nik Name"}
                    margin={"normal"}
                    required
                    error={!!formik.errors.nik_name && formik.touched.nik_name}
                    helperText={formik.errors.nik_name && formik.errors.nik_name}
                />
            </div>
            <Button type={"submit"} variant={"contained"}>Add</Button>
        </form>
    )
}