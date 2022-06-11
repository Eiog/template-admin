import http from "@/http"
export const _repeatRequest = () => {
    return http.get('repeat-request/path1')
}
