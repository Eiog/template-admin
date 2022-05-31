import { RouteLocationNormalized, RouteLocationRaw } from "vue-router";
import { defineStore } from "pinia";
type tab = {
    name: string|unknown,
    path: string | unknown,
    meta: object | unknown,
    rootTab?: boolean | unknown,
    loading?:boolean|unknown
}
interface tabState {
    tabs: tab[]
    activeIndex: number,
}
const rootTab:tab = {

    name: 'analysis',
    path: '/dashboard/analysis',
    meta: {
        title: '分析页',
        icon: 'ri-bubble-chart-line',
    },
    rootTab: true
}
export const useTabStore = defineStore({
    id: 'tabStore',
    state: (): tabState => ({
        tabs: [
            rootTab
        ],
        activeIndex: 0
    }),
    actions: {
        setTab(route: RouteLocationNormalized) {
            let tab: tab = {
                name: route.name,
                path: route.path,
                meta: route.meta,
                loading:true
            }
            let index = this.tabs.findIndex(item => { return item.name === tab.name })
            if (index === -1) {
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
            this.tabs.splice(index, 1)
            if (this.activeIndex === index) {
                this.activeIndex = this.tabs.length - 1
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
        loaded(){
            this.tabs[this.activeIndex].loading = false
        }
    },
    getters: {
        getTab(state) {

        },
        getTabItem(state) {
            return state.tabs[state.activeIndex]
        }
    }
})