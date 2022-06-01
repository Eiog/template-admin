import { defineStore } from "pinia";
type state = {
    user: {
        id: number,
        userName: string,
        nickName: string,
        auth: string,
        avatar: string,
        token: string
    }|undefined
}
export const useAuthStore = defineStore({
    id: 'authStore',
    state: ():state => ({
        user: undefined
    }),
    actions: {

    },
    getters: {

    }
})