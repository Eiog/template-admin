import { RouteLocation } from "vue-router";
import { defineStore } from "pinia";
import { useRouteStore,useAuthStore } from '@/store';
import { nextTick } from "vue";
import {getAuthTab} from './_methods'
type State = {
    tabs: AuthTab.Tab[]
    activePath:string,
    refreshing: boolean,
    scroll: number
}
const rootTab: AuthTab.Tab = {
    name: 'analysis',
    path: '/dashboard/analysis',
    title: '分析页',
    icon: 'ri-bubble-chart-line',
    role: ['user', 'admin', 'super'],
    rootTab: true
}
export const useTabStore = defineStore({
    id: 'tabStore',
    state: (): State => ({
        tabs: [
            rootTab
        ],
        activePath:'/dashboard/analysis',
        refreshing: false,
        scroll: 0,
    }),
    actions: {
        setTab(route: RouteLocation) {
            useRouteStore().addIncludes(route.name as string)
            this.refreshing = true
            let index = this.tabs.findIndex(tab => { return tab.path === route.path })
            if (index === -1) {
                let tab: AuthTab.Tab = {
                    name: route.name,
                    path: route.path,
                    title: route.meta.title,
                    icon: route.meta.icon??undefined,
                    role: route.meta.role!,
                    loading: true
                }
                this.tabs.push(tab)
                this.activePath = route.path
                this.tabs[this.activeIndex].loading = true
                return
            }
            this.activePath = route.path
            this.tabs[this.activeIndex].loading = true
        },
        changeTab(index: number) {

        },
        removeTab(removeTab:AuthTab.Tab) {
            useRouteStore().removeIncludes(removeTab.name as string)
            if(this.activePath === removeTab.path){
                this.tabs.splice(this.activeIndex,1)
                this.activePath = this.tabs[this.tabs.length-1].path as string
            }else{
                let index = this.tabs.findIndex(tab=>{return tab.path===removeTab.path})
                this.tabs.splice(index,1)
            }
        },
        closeTab(key: string) {
            switch (key) {
                case 'close-all':
                    this.$reset()
                    break;

                default:
                    break;
            }
        },
        loaded() {
            this.refreshing = false
            this.tabs[this.activeIndex].loading = false
        },
        refresh() {
            const routeStore = useRouteStore()
            routeStore.addExcludes(this.activeTab.name as string)
            this.tabs[this.activeIndex].loading = true
            this.refreshing = true
            nextTick(() => {
                routeStore.clearExcludes()
                this.tabs[this.activeIndex].loading = false
                this.refreshing = false
            })
        }
    },
    getters: {
        authTab(state):AuthTab.Tab[] {
            const authStore = useAuthStore()
            return getAuthTab(state.tabs,authStore.auth)
        },
        authActiveIndex(state):number{
            let index = this.authTab.findIndex(tab=>{return state.activePath===tab.path})
            return index
        },
        activeTab(state):AuthTab.Tab {
            let index = state.tabs.findIndex(tab=>{return state.activePath===tab.path})
            return state.tabs[index]
        },
        activeIndex(state):number{
            return state.tabs.findIndex(tab=>{return state.activePath===tab.path})
        }
    }
})