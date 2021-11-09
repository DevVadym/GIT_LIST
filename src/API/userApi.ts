import { v1 } from "uuid"

export type UserType = {
    name: string
    last_name: string
    email: string
    tel: string
    password: string
    repeat_password: string
    date: string
    id: string
}

export type LoginDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export type LoginResponseType = {
    user: UserType
    rememberMe: boolean
    text: "success"
}

const createLoginToken = (data: string) => {
    const token = {data, id: v1(), date: new Date().toLocaleTimeString()}
    localStorage.setItem("token", JSON.stringify(token))
}

const getUsersFromLs = (): UserType[] => {
    let prevUsers = localStorage.getItem("users")
    let users
    if (prevUsers) {
        users = JSON.parse(prevUsers)
    }
    if (users === null || users === undefined) {
        users = [] as UserType[]
    }
    return users
}

const addUserToLS = (user: UserType): string => {
    let users = getUsersFromLs()
    let isRegisteredUser = users.some((u: UserType) => u.name === user.name && u.email === user.email)
    if (isRegisteredUser) {
        return "User already registered" as string
    }
    localStorage.setItem("users", JSON.stringify([...users, user]))
    return "User successfully register" as string
}

const isUserRegistered = (data: LoginDataType): string | LoginResponseType => {
    let users = getUsersFromLs()
    let user = users.find(u => u.email === data.email && u.password === data.password)
    if (user) {
        localStorage.setItem("login_user", JSON.stringify(user))
        return {user, text: "success", rememberMe: data.rememberMe}
    } else {
        return "Failed login"
    }
}

const isUserLogin = () => {
    let user = localStorage.getItem("login_user")
    return !!user
}

export const userApi = {
    addUser(user: UserType) {
        return addUserToLS(user)
    },
    getUser(data: LoginDataType) {
        return isUserRegistered(data)
    },
    initializeUser() {
        return isUserLogin()
    }
}