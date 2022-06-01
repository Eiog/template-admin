import { defineStore } from "pinia";
import { initRoutes,routeToMenu,getCacheRoutes,getAuthMenu } from "./methods";
import { useAuthStore } from "../auth";
import { useTabStore } from "../tabs";
import { nextTick } from "vue";

export const useRouteStore = defineStore({
    id: 'routeStore',
    state: () => ({
        routes:initRoutes(),
        Menu:routeToMenu(),
        include:getCacheRoutes(),
        excludes:new Array,
    }),
    actions: {
        addExcludes(data){
            this.excludes.push(data)
        },
        removeExcludes(data){
            let index = this.excludes.findIndex(item=>item===data)
            this.excludes.splice(index,1)
        },
        clearExcludes(){
            this.excludes = []
        }
    },
    getters: {
        authMenu(state){
            const authStore = useAuthStore()
            return getAuthMenu(state.Menu,authStore.user?.auth as string)
        }
    }
})