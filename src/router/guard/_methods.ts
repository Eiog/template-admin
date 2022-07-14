import NProgress from 'nprogress';
import { RouteLocation, RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import { useTabStore, useAuthStore } from '@/store';
import { getLocal, setLocal, removeLocal } from '@/utils/storage'
import { loginApi } from '@/api'

/**使用进度条 */
export function useNProgress() {
    /**进度条开始 */
    function start() {
        if (!NProgress.isStarted()) {
            NProgress.start();
        }
    }
    /**进度条结束 */
    function done() {
        NProgress.done();
    }
    return { start, done }
}

/**token判断登录状态 */
export function useAuth(to: RouteLocation, form: RouteLocationNormalized, next: NavigationGuardNext) {
    const authStore = useAuthStore()
    const token = authStore.token
    /**没有token并且去往需要权限地址 跳转到登录 */
    if (!token && to.meta.requiresAuth) {
        next('/login')
    }
    /**有token并且去往登录页面 跳转到form-path */
    if (token && to.path === '/login') {
        next(form.path)
    }
    /**有token并且去往权限页面 开始验证 */
    if (token && to.meta.requiresAuth) {
        /**判断是否是第一次验证 */
        if (authStore.refreshed) {
            /**不是第一次验证 直接跳转路由权限验证 */
            checkAuth(to, form, authStore.auth, next)
        } else {
            /**是第一次验证 获取登录状态 刷新token */
            loginApi.status().then(() => {
                checkAuth(to, form, authStore.auth, next)
            }).catch(() => {
                window.$notification.error({ content: '登录失效' })
                next('/login')
            })
        }
    }
    /**不需要权限验证的路由直接通过 */
    if (!to.meta.requiresAuth) {
        next()
    }
}
/**添加tab */
export function useTab(to: RouteLocation) {
    if (to.meta.requiresAuth && !to.meta.hide) {
        useTabStore().setTab(to)
    }
}
/**是否包含权限*/
function isAuthed(to: RouteLocation, auth: AuthRoute.RoleType) {
    return to.meta?.role?.includes(auth)
}
/**检测权限*/
function checkAuth(to: RouteLocation, form: RouteLocationNormalized, auth: AuthRoute.RoleType, next: NavigationGuardNext) {
    if (isAuthed(to, auth)) {
        next()
    } else {
        window.$notification.error({ content: '没有权限' })
        next(form.path)
    }
}
