declare namespace AuthTab {
    interface Tab {
        name: string | unknown,
        path: string | unknown,
        title: string,
        icon: string,
        role: AuthRoute.RoleType[],
        rootTab?: boolean | unknown,
        loading?: boolean | unknown
    }
}