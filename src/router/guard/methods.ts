import NProgress from 'nprogress';
import { RouteLocation,NavigationGuardNext } from 'vue-router';
import { useTabStore, useAuthStore } from '@/store';
import { getLocal } from '@/utils/storage'
import { _feachStatus } from '@/http/api/userApi'

/**使用进度条 */
export function useNProgress() {
    function start() {
        if (!NProgress.isStarted()) {
            NProgress.start();
        }
    }
    function done() {
        NProgress.done();
    }
    return { start, done }
}

/**token判断登录状态 */
export function useAuth(to: RouteLocation) {
    return new Promise((resolve, reject) => {
        const token = getLocal('UNLIT-TOKEN')
        if (!token && to.path != '/login') {
            return resolve('/login')
        }
        if (token && to.path === '/login') {
            return resolve('/')
        }
        if (token && to.meta.requiresAuth) {
            _feachStatus().then((res: any) => {
                useAuthStore().user = res.data
                return resolve(undefined)
            }).catch(() => {
                return resolve('/')
            })
            return
        }
    })
}
/**添加tab */
export function useTab(to: RouteLocation) {
    if (to.meta.requiresAuth) {
        useTabStore().setTab(to)
    }
}