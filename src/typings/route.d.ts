declare namespace AuthRoute {
    type RoleType = keyof typeof import('@/enum').EnumUserRole
    type RouteMeta = {
        title: string,
        icon?: string,
        requiresAuth?: boolean,
        permissions?: RoleType[],
        keepAlive: boolean,
        hide: boolean,
        href?: string,
        order?: number
    }
    type Route = {
        path:string,
        name?:string,
        redirect?:string,
        component:import('vue').Component
        meta?:RouteMeta,
        children?:Route
    }
}