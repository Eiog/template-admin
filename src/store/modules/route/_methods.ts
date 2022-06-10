import { h } from 'vue'
import { RouteRecordRaw, } from "vue-router";
import type { MenuOption,MenuGroupOption,MenuDividerOption  } from 'naive-ui'
import { NIcon } from 'naive-ui';
import moduleRoutes from "@/router/modules";
/**获取全部路由 */
export function initRoutes() {
    return moduleRoutes
}
/**路由转naive菜单 剔除无权限路由 */
export function routeToMenu(auth: AuthRoute.RoleType, routes = moduleRoutes):MenuOption[]  {
    let arr: any = []
    routes.forEach((item) => {
        if (!item.meta) return
        if (item.meta.hide) return
        if (!item.meta.role.includes(auth)) return
        let menuItem: MenuOption = {
            label: item.meta.title,
            key: item.name as string,
            role: item.meta.role,
            icon: renderIcon(item.meta.icon as string)
        }
        if (item.children) {
            menuItem.children = routeToMenu(auth, item.children)
        }
        arr.push(menuItem)
    })
    return arr
}


/**获取需要缓存的路由 */
export function getCacheRoutes(routes: RouteRecordRaw[] = moduleRoutes) {
    const cacheNames: string[] = [];
    routes.forEach(route => {
        // 只需要获取二级路由的缓存的组件名
        if (hasChildren(route)) {
            (route.children as RouteRecordRaw[]).forEach(item => {
                if (isKeepAlive(item)) {
                    cacheNames.push(item.name as string);
                }
            });
        }
    });
    return cacheNames;
}
/**
* 路由是否缓存
* @param route
*/
function isKeepAlive(route: RouteRecordRaw) {
    return Boolean(route?.meta?.keepAlive);
}
/**
 * 是否有二级路由
 * @param route
 */
function hasChildren(route: RouteRecordRaw) {
    return Boolean(route.children && route.children.length);
}
function renderIcon(icon: string) {
    return () => h(NIcon, null, { default: () => h('i', { class: icon }, {}) })
}