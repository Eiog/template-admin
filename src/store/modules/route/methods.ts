import { h, Component } from 'vue'
import { RouteRecordRaw } from "vue-router";
import type { MenuOption } from 'naive-ui'
import { NIcon } from 'naive-ui';
import moduleRoutes from "@/router/modules";
import { useAuthStore } from '../auth';
type routeItem= {
    name:string,
    meta?:{
        title:string,
        hide:boolean,
        role:Array<string>|any,
        icon:string
    },
    children:RouteRecordRaw[]
}
type menuType = {
    role?:Array<string>|any,
    children?:menuType
}|MenuOption
export function initRoutes() {
    return moduleRoutes
}
function renderIcon(icon: string) {
    return () => h(NIcon, null, { default: () => h('i', { class: icon }, {}) })
}

export function routeToMenu(auth,routes:AuthRoute.Route[] = moduleRoutes) {
    let arr: any = []
    routes.forEach((item:AuthRoute.Route) => {
        if (!item.meta) return
        if (item.meta.hide) return
        if (!item.meta.role.includes(auth)) return
        let menuItem: menuType = {
            label: item.meta.title,
            key: item.name as string,
            role:item.meta.role,
            icon: renderIcon(item.meta.icon as string)
        }
        if (item.children) {
            menuItem.children = routeToMenu(auth,item.children)
        }
        arr.push(menuItem)
    })
    return arr
}


/**获取需要缓存的路由 */
export function getCacheRoutes(routes: RouteRecordRaw[] =moduleRoutes) {
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