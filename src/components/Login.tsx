import React, { ChangeEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { isRegisteredUser, StatusType } from "../bll/loginReducer"
import { RootState } from "../bll/store"
import { Redirect } from "react-router-dom"

export const Login: React.FC = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    let status = useSelector<RootState, StatusType>(state => state.login.status ? state.login.status : null)

    const dispatch = useDispatch()

    const nameChangeHandler = () => {
        return (e: ChangeEvent<HTMLInputElement>) => {
            setName(e.currentTarget.value)
        }

    }
    const emailChangeHandler = () => {
        return (e: ChangeEvent<HTMLInputElement>) => {
            setEmail(e.currentTarget.value)
        }

    }

    const onSubmitHandler = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(isRegisteredUser({name, email}))
    }

    if (status === "finished") {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            login
            <form onSubmit={onSubmitHandler} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <input style={{width: "150px"}} value={name} onChange={nameChangeHandler()}/>
                <input style={{width: "150px"}} value={email} onChange={emailChangeHandler()}/>
                <button style={{width: "50px"}} type={"submit"}>submit</button>
            </form>
        </div>
    )
}