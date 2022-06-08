import { RouteLocation } from "vue-router";
import { defineStore } from "pinia";
import { useRouteStore } from '@/store';
import { nextTick } from "vue";
interface Tab {
    name: string|unknown,
    path: string | unknown,
    title:string,
    icon:string,
    rootTab?: boolean | unknown,
    loading?:boolean|unknown
}

type tabState = {
    tabs: Tab[]
    activeIndex: number,
    refreshing:boolean,
    scroll:number
}
const rootTab:Tab = {
    name: 'analysis',
    path: '/dashboard/analysis',
    title: '分析页',
    icon: 'ri-bubble-chart-line',
    rootTab: true
}
export const useTabStore = defineStore({
    id: 'tabStore',
    state: (): tabState => ({
        tabs: [
            rootTab
        ],
        activeIndex: 0,
        refreshing:false,
        scroll:0,
    }),
    actions: {
        setTab(route: RouteLocation) {
            useRouteStore().addIncludes(route.name)
            this.refreshing = true
            let index = this.tabs.findIndex(item => { return item.name === route.name})
            if (index === -1) {
                let tab: Tab = {
                    name: route.name,
                    path: route.path,
                    title:route.meta.title,
                    icon:route.meta.icon as string,
                    loading:true
                }
                this.activeIndex = this.tabs.length
                this.tabs.push(tab)
                return
            }
            this.activeIndex = index
            this.tabs[index].loading = true
        },
        changeTab(index:number){
            
        },
        removeTag(index) {
            useRouteStore().removeIncludes(this.activeTab.name)
            this.tabs.splice(index, 1)
            if (this.activeIndex === index) return this.activeIndex = this.tabs.length - 1
            // this.activeIndex = index
            console.log(index,this.activeIndex);
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
        loaded(){
            this.refreshing = false
            this.tabs[this.activeIndex].loading = false
        },
        refresh(){
            const routeStore = useRouteStore()
            routeStore.addExcludes(this.activeTab.name)
            this.tabs[this.activeIndex].loading = true
            this.refreshing = true
            nextTick(()=>{
                routeStore.clearExcludes()
                this.tabs[this.activeIndex].loading = false
                this.refreshing = false
            })
        }
    },
    getters: {
        getTab(state) {

        },
        activeTab(state) {
            return state.tabs[state.activeIndex]
        }
    }
})