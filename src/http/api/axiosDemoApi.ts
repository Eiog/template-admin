import http from "@/http"
// import '@/mock/axiosDemo.mock'
export const _repeatRequest = () => {
    return http.get('axios-demo/repeat-request')
}
