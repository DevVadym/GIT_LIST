import axios from "axios"

const BaseUrl = process.env.REACT_APP_BASE_URL
const Token = process.env.REACT_APP_USER_GIT_TOKEN

export const instance = axios.create({
    baseURL: BaseUrl,
    headers: {
        "Authorization": Token ? Token : ""
    }
})