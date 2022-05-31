import { defineStore } from "pinia";
import { initRoutes,routeToMenu,getCacheRoutes } from "./methods";
export const useRouteStore = defineStore({
    id: 'routeStore',
    state: () => ({
        routes:initRoutes(),
        naiveMenu:routeToMenu(),
        keepAlives:getCacheRoutes()
    }),
    actions: {

    },
    getters: {

    }
})