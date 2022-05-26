import { defineStore } from "pinia";
type tabs = {
    title: string,
    name: string,
    path: string,
    icon: string,
    rootTab?:boolean
}
export const tabsStore = defineStore({
    id: 'tabsStore',
    state: () => ({
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
        setTab(route) {
            let tab = {
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