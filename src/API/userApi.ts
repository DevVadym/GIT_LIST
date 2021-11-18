export type UserType = {
    name: string
    last_name: string
    email: string
    tel: string
    password?: string
    repeat_password?: string
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

export type TokenType = {
    id: string
    date: string
}

const createLoginToken = (data: string): void => {
    const token: TokenType = {id: data, date: new Date().toLocaleTimeString()}
    localStorage.setItem("token", JSON.stringify(token))
}

const getUsersFromLs = (): UserType[] | null => {
    let prevUsers: string | null = localStorage.getItem("users")
    if (prevUsers) {
        try {
            return JSON.parse(prevUsers)
        } catch (e) {
            console.log("user not found")
            return null
        }
    }
    return [] as UserType[]
}

const addUserToLS = (user: UserType): string => {
    let users = getUsersFromLs()
    let isRegisteredUser = users?.some((u: UserType) => u.name === user.name && u.email === user.email)
    if (isRegisteredUser) {
        return "User already registered"
    }
    if (users) {
        localStorage.setItem("users", JSON.stringify([...users, user]))
        return "User successfully register"
    }
    return "null"
}

const isUserRegistered = (data: LoginDataType): string | LoginResponseType => {
    let users = getUsersFromLs()
    let user = users?.find((u: UserType) => u.email === data.email && u.password === data.password)
    if (user) {
        localStorage.setItem("login_user", JSON.stringify(user))
        if (data.rememberMe) {
            createLoginToken(user.id)
        }
        return {user, text: "success", rememberMe: data.rememberMe}
    } else {
        return "Failed login"
    }
}

const isUserLogin = (): boolean => {
    let user = localStorage.getItem("login_user")
    return !!user
}

const getLoginUserFromLS = (): UserType | any => {
    let userLS = localStorage.getItem("login_user")
    if (userLS) {
        try {
            return JSON.parse(userLS)
        } catch (e) {
            console.log("not find login user")
            return null
        }
    }
}

const getLoginUser = (): UserType | null => {
    return getLoginUserFromLS()
}

export const logoutF = (): void => {
    localStorage.removeItem("login_user")
    localStorage.removeItem("token")
}

export const userToken = (): TokenType | null => {
    const tokenLS = localStorage.getItem("token")
    if (tokenLS) {
        try {
            return JSON.parse(tokenLS)
        } catch (e) {
            console.log("token not created")
            return null
        }
    }
    return null
}

export const userApi = {
    addUser(user: UserType): string {
        return addUserToLS(user)
    },
    getUser(data: LoginDataType): string | LoginResponseType {
        return isUserRegistered(data)
    },
    initializeUser(): boolean {
        return isUserLogin()
    },
    setUser(): UserType | null {
        return getLoginUser()
    }
}