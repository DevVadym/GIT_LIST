import { instance } from "./instance"

export const gitApi = {
    getAccount(nik: string) {
        return instance.get(`${nik}`)
    }
}