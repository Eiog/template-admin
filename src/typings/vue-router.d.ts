import { _RouteLocationBase } from "vue-router";
type RoleType = keyof typeof import('@/enum').EnumUserRole
declare module 'vue-router'{
    interface RouteMeta extends AuthRoute.RouteMeta{}
}

declare namespace AuthRoute {
    type RoleType = keyof typeof import('@/enum').EnumUserRole|undefined
    type RouteMeta = {
        title: string,
        icon?: string|import ('vue').VNode,
        requiresAuth?: boolean,
        role: RoleType[],
        keepAlive: boolean,
        hide: boolean,
        href?: string,
        order?: number
    }
}