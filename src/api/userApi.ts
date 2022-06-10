import http from "@/http"
export const _feachLogin = (data) => {
    return http.post('user/login', data)
}
export const _feachStatus = () => {
    return http.get('user/status')
}