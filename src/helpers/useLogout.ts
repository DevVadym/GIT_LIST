import { useDispatch } from "react-redux"
import { useCallback } from "react"
import { logoutF } from "../API/userApi"
import { userThunk } from "../components/User/UserSlice/userThunk"

export const useLogout = () => {
    const dispatch = useDispatch()
    const logoutHandler = useCallback(()=>{
        logoutF()
        dispatch(userThunk())
    },[dispatch])
    return logoutHandler
}