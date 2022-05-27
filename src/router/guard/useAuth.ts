import { userStore } from '@/store/userStore';
import { Router } from 'vue-router'
import { getStorage } from '@/utils/storage'
import { _feachStatus } from '@/http/api/userApi'
const useAuth = function (router: Router) {
    router.beforeEach((to, from, next) => {
        const token = getStorage('UNLIT-TOKEN')
        if (!token && to.path != '/login') {
            next({ name: 'login' })
            return
        }
        if (token && to.path === '/login') {
            router.go(-1)
            return
        }
        if (token && to.path != '/login') {
            _feachStatus().then((res: any) => {
                userStore().user = res.data
                next()
            }).catch(() => {
                router.push('/login')
            })
            return
        }
        next()
    })
}
export default useAuth