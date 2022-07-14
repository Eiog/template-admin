import {RouteRecordRaw} from 'vue-router'
import type { MenuOption } from 'naive-ui'
import { defineStore } from "pinia";
import { initRoutes,routeToMenu } from "./_methods";
import { useAuthStore } from "../auth";
type State = {
    routes:RouteRecordRaw[],
    include:string[],
    excludes:string[]
}
export const useRouteStore = defineStore({
    id: 'routeStore',
    state: ():State => ({
        routes:initRoutes(),
        include:new Array,
        excludes:new Array,
    }),
    actions: {
        addExcludes(data:string){
            this.excludes.push(data)
        },
        addIncludes(data:string){
            if(this.include.includes(data)) return
            this.include.push(data)
        },
        removeExcludes(data:string){
            let index = this.excludes.findIndex(item=>item===data)
            this.excludes.splice(index,1)
        },
        removeIncludes(data:string){
            let index = this.include.findIndex(item=>item===data)
            this.include.splice(index,1)
        },
        clearExcludes(){
            this.excludes = []
        }
    },
    getters: {
        authMenu():MenuOption[]{
            const authStore = useAuthStore()
            return routeToMenu(authStore.auth)
        }
    }
})