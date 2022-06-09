import { defineStore } from "pinia";
import { initRoutes,routeToMenu } from "./_methods";
import { useAuthStore } from "../auth";
export const useRouteStore = defineStore({
    id: 'routeStore',
    state: () => ({
        routes:initRoutes(),
        include:new Array,
        excludes:new Array,
    }),
    actions: {
        addExcludes(data){
            this.excludes.push(data)
        },
        addIncludes(data){
            if(this.include.includes(data)) return
            this.include.push(data)
        },
        removeExcludes(data){
            let index = this.excludes.findIndex(item=>item===data)
            this.excludes.splice(index,1)
        },
        removeIncludes(data){
            let index = this.include.findIndex(item=>item===data)
            this.include.splice(index,1)
        },
        clearExcludes(){
            this.excludes = []
        }
    },
    getters: {
        authMenu(state){
            const authStore = useAuthStore()
            return routeToMenu(authStore.auth)
        }
    }
})