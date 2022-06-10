import http from "@/http"
export const _repeatRequest = () => {
    return http.get('axios-demo/repeat-request')
}
