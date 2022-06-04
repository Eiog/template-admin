import Mock from 'mockjs'
const baseUrl = import.meta.env.VITE_API_BASEURL
Mock.setup({ timeout: '100-500' })
Mock.mock(baseUrl + '/user/login', 'post', {
    code: 200,
    data: {
        id: 10001,
        userName: 'unlit',
        nickName: 'unlit',
        auth: 'admin',
        avatar: 'http://unlit.oss-cn-beijing.aliyuncs.com/2022-04-22/e3beb59b0652f7fbfc32a0102dcf035a.png!avatar',
        token:Mock.Random.guid()
    }
})
Mock.mock(baseUrl + '/user/status', 'get', {
    code: 200,
    data: {
        id: 10001,
        userName: 'unlit',
        nickName: 'unlit',
        auth: 'super',
        avatar: 'http://unlit.oss-cn-beijing.aliyuncs.com/2022-04-22/e3beb59b0652f7fbfc32a0102dcf035a.png!avatar',
        token:Mock.Random.guid()
    }
})