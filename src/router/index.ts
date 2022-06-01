import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router';
import {rootRoutes,commonRoutes} from './routes';
import { setComponentName } from '@/utils';
import { createGuard } from './guard';
import moduleRoutes from './modules';
console.log();

const routes: Array<RouteRecordRaw> = [
    rootRoutes,
    ...moduleRoutes,
    ...commonRoutes,
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
/**添加路由守卫 */
 createGuard(router)

export default router;
export * from './modules'