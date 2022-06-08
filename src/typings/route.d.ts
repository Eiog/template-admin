declare namespace AuthRoute {
    type RoleType = keyof typeof import('@/enum').EnumUserRole
    type RouteMeta = {
        title: string,
        icon?: string|import ('vue').VNode,
        requiresAuth?: boolean,
        role: RoleType[],
        keepAlive?: boolean,
        hide?: boolean,
        href?: string,
        order?: number
    }
}