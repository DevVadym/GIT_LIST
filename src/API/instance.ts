import axios from "axios"

export const instance = axios.create({
    baseURL: "https://api.github.com/users/",
    headers: {
        "Access-Control-Allow-Origin": "*"
    },
    withCredentials: true
})