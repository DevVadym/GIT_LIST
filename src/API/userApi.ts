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

const jsonParse = (text: string) => {
  try {
      return JSON.parse(text)
  }
  catch (e) {
      return null
  }
}

const getUsersFromLs = (): UserType[] => {
    let prevUsers: string | null = localStorage.getItem("users")
    let users
    if (prevUsers) {
        users = jsonParse(prevUsers)
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

const getLoginUserFromLS = (): UserType | null => {
    let userLS = localStorage.getItem("login_user")
    let user: UserType | null
    if (userLS) {
        user = JSON.parse(userLS)
    } else {
        user = null
    }
    return user
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
    let token: TokenType | null
    if (tokenLS) {
        token = jsonParse(tokenLS)
    } else {
        token = null
    }
    return token
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