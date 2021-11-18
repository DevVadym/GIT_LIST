import { instance } from "./instance"

export const gitApi = {
    getAccountEvents(nik: string) {
        return instance.get(`users/${nik}/events`)
            .then(res => res.data)
    }
}

