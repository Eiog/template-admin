import { defineStore } from "pinia";
import { darkColor } from "@/utils/color";
import {colord} from 'colord'

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