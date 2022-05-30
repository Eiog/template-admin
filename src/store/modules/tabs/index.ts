import { RouteLocationNormalized } from "vue-router";
import { defineStore } from "pinia";
type tabs = {
    title: string|unknown,
    name: string,
    path: string|unknown,
    icon: string|unknown,
    rootTab?:boolean|unknown
}|RouteLocationNormalized
interface tabState {
    tabs:tabs[]
    activeIndex:number
}
export const useTabStore = defineStore({
    id: 'tabStore',
    state: ():tabState => ({
        tabs: [
            {
                title:'分析页',
                name:'analysis',
                path:'/dashboard/analysis',
                icon:'ri-bubble-chart-line',
                rootTab:true
            }
        ],
        activeIndex: 0
    }),
    actions: {
        setTab(route:RouteLocationNormalized) {
            let tab:tabs = {
                title: route.meta.title,
                name: route.name,
                path: route.path,
                icon: route.meta.icon
            }
            let index = this.tabs.findIndex(item => { return item.name === tab.name })
            if (index === -1) {
                this.activeIndex = this.tabs.length
                this.tabs.push(tab)
                return
            }
            this.activeIndex = index
        },
        removeTag(index){
            this.tabs.splice(index,1)
            if(this.activeIndex === index){
                this.activeIndex = this.tabs.length-1
            }
        }
    },
    getters: {
        getTabItem(state) {
            return state.tabs[state.activeIndex]
        }
    }
})