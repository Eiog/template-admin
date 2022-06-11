import { MockMethod } from 'vite-plugin-mock';
import Mock, { Random } from 'mockjs';
const baseUrl = '/api'
export default[
    {
        url:baseUrl+'/repeat-request/path1',
        method:'get',
        timeout:2000,
        response:()=>{
            return{
                code:200,
                data:'path1'
            }
        }
    },
    {
        url:baseUrl+'/repeat-request/path2',
        method:'get',
        timeout:2000,
        response:()=>{
            return{
                code:200,
                data:'path2'
            }
        }
    }
]as MockMethod[]