import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router';
import exceptionRoutes from './route.exception';
import asyncRoutes from './route.async';
import commonRoutes from './route.common';
import useAuth from './guard/useAuth';
import useTab from './guard/useTab'
import useProgress from './guard/useProgress';
const routes: Array<RouteRecordRaw> = [
    // 无鉴权的业务路由 ex:登录
    ...commonRoutes,
    // 带鉴权的业务路由
    ...asyncRoutes,
    // 异常页必须放在路由匹配规则的最后
    ...exceptionRoutes,
];
const router: Router = createRouter({
    // 新的vue-router4 使用 history路由模式 和 base前缀
    history: createWebHistory(import.meta.env.VITE_BASE as string),
    routes,
});
/**
 * @description: 全局路由前置守卫，在进入路由前触发，导航在所有守卫 resolve 完之前一直处于等待中。
 * @param {RouteLocationNormalized} to  即将要进入的目标
 * @param {RouteLocationNormalizedLoaded} from  当前导航正在离开的路由
 * @return {*}
 */

//进度条
useProgress(router)
//权限验证
useAuth(router)
//添加tabs
useTab(router)

export default router;
export * from './route.async'
export * from './route.common'
export * from './route.exception'
