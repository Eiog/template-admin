import http from "@/http"
import { useAuthStore } from "@/store"
const login = (data) => {
    const authStore = useAuthStore()
    return new Promise((resolve, reject) => {
        http.post('/login', data).then((res: any) => {
            authStore.user = res
            authStore.auth = res.auth
            authStore.refreshed = true
            authStore.token = res.token
            return resolve(res)
        }).catch((err) => {
            return reject(err)
        })
    })
}
const status = ()=>{
    const authStore = useAuthStore()
    const token = authStore.token
    return new Promise((resolve,reject)=>{
        http.get('/login/status',{token:token}).then((res:any)=>{
            authStore.user = res
            authStore.auth = res.auth
            authStore.refreshed = true
            authStore.token = res.token
            return resolve(res)
        }).catch((err)=>{
            return reject(err)
        })
    })
}
export const loginApi = {
    login,status
}