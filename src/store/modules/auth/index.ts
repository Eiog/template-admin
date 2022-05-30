import { defineStore } from "pinia";
type state = {
    user?: {
        id: number,
        userName: string,
        nickName: string,
        auth: string,
        avatar: string,
        token: string
    } | Object
}
export const useAuthStore = defineStore({
    id: 'authStore',
    state: () => ({
        user: {
            id: undefined,
            userName: undefined,
            nickName: undefined,
            auth: undefined,
            avatar: undefined,
            token: undefined
        }
    }),
    actions: {

    },
    getters: {

    }
})