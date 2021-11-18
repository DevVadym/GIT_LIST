import axios from "axios"

export const instance = axios.create({
    baseURL: "https://api.github.com/search/users/",
    headers: {
        "Authorization": "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"
    },
})