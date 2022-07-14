import { MockMethod } from 'vite-plugin-mock';
import Mock, { Random } from 'mockjs';
const baseUrl = '/api'
export default [
    {
        url: baseUrl + '/login',
        method: 'post',
        timeout: 2000,
        statusCode: 200,
        response: () => {
            return {
                id: 10001,
                userName: 'unlit',
                nickName: 'unlit',
                auth: 'admin',
                avatar: 'http://unlit.oss-cn-beijing.aliyuncs.com/2022-04-22/e3beb59b0652f7fbfc32a0102dcf035a.png!avatar',
                token: Mock.Random.guid()
            };
        }
    },
    {
        url: baseUrl + '/login/status',
        method: 'get',
        statusCode: 200,
        timeout: 100,
        response: () => {
            return {
                id: 10001,
                userName: 'unlit',
                nickName: 'unlit',
                auth: 'super',
                avatar: 'http://unlit.oss-cn-beijing.aliyuncs.com/2022-04-22/e3beb59b0652f7fbfc32a0102dcf035a.png!avatar',
                token: Mock.Random.guid()
            };
        }
    },
] as MockMethod[];