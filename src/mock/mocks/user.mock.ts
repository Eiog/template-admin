import { MockMethod } from 'vite-plugin-mock';
import Mock, { Random } from 'mockjs';
export default [
    {
        url: '/user/login',
        method: 'post',
        response: () => {
            return {
                code: 200,
                data: {
                    id: 10001,
                    userName: 'unlit',
                    nickName: 'unlit',
                    auth: 'admin',
                    avatar: 'http://unlit.oss-cn-beijing.aliyuncs.com/2022-04-22/e3beb59b0652f7fbfc32a0102dcf035a.png!avatar',
                    token: Mock.Random.guid()
                }
            };
        }
    },
    {
        url: '/user/status',
        method: 'get',
        response: () => {
            return {
                code: 200,
                data: {
                    id: 10001,
                    userName: 'unlit',
                    nickName: 'unlit',
                    auth: 'super',
                    avatar: 'http://unlit.oss-cn-beijing.aliyuncs.com/2022-04-22/e3beb59b0652f7fbfc32a0102dcf035a.png!avatar',
                    token: Mock.Random.guid()
                }
            };
        }
    },
] as MockMethod[];