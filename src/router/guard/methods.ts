import NProgress from 'nprogress';
import { RouteLocation,RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import { useTabStore, useAuthStore,useRouteStore } from '@/store';
import { getLocal,setLocal } from '@/utils/storage'
import { _feachStatus } from '@/http/api/userApi'

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
export function useAuth(to: RouteLocation,form:RouteLocationNormalized,next:NavigationGuardNext) {
        const token = getLocal('UNLIT-TOKEN')
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
            if(useAuthStore().refreshed){
                /**不是第一次验证 直接跳转路由权限验证 */
                if(isAuthed(to,useAuthStore().auth)){
                    next()
                }else{
                    window.$notification.error({content:'没有权限'})
                    next(form.path)
                }
            }else{
                /**是第一次验证 获取登录状态 刷新token */
                refreshToken().then(()=>{
                    if(isAuthed(to,useAuthStore().auth)){
                        next()
                    }else{
                        window.$notification.error({content:'没有权限'})
                        next(form.path)
                    }
                }).catch(()=>{
                    window.$notification.error({content:'登录失效'})
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
    if (to.meta.requiresAuth) {
        useTabStore().setTab(to)
    }
}
function isAuthed(to:RouteLocation,auth:AuthRoute.RoleType){
    return to.meta?.role?.includes(auth)
}

function refreshToken(){
    return new Promise((resolve,reject)=>{
        _feachStatus().then((res: any) => {
            useAuthStore().user = res.data
            useAuthStore().auth = res.data.auth
            useAuthStore().refreshed = true
            setLocal('UNLIT-TOKEN',res.data.token)
            return resolve(res)
        }).catch(() => {
            return reject()
        })
    })
}