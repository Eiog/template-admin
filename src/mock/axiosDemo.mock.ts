import Mock from 'mockjs'
const baseUrl = import.meta.env.VITE_API_BASEURL
Mock.setup({ timeout: '1000-3000' })
Mock.mock(baseUrl + '/axios-demo/repeat-request', 'get', {
    code: 200,
    data: {
        
    }
})