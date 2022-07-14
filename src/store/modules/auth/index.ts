import { defineStore } from "pinia";
enum Auth{
    USER='user',
    ADMIN='admin',
    SUPER='super'
}
type state = {
    user: {
        id?: number,
        userName?: string,
        nickName?: string,
        auth?: string,
        avatar?: string,
        token?: string
    },
    auth:`${Auth}`
    token?:string
    refreshed:boolean
}
export const useAuthStore = defineStore({
    id: 'authStore',
    persist: {
        key: 'UNLIT__TOKEN',
        paths: ['token']
      },
    state: ():state => ({
        user:{},
        auth:'user',
        refreshed:false,
        token:undefined
    }),
    actions: {

    },
    getters: {
        getAuth(state){
            return state.auth +'222'
        }
    }
})