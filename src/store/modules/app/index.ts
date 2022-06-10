import { defineStore } from "pinia";
export const useAppStore = defineStore({
    id: 'appStore',
    state: () => ({
        sideCollapsed:false,
        settingShow:false,
    }),
    actions: {

    },
    getters: {
        
    }
})