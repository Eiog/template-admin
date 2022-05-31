import { defineStore } from "pinia";
export const useAppStore = defineStore({
    id: 'appStore',
    state: () => ({
        reload:false,
        sideCollapsed:false,
        settingShow:false,
    }),
    actions: {

    },
    getters: {
        
    }
})