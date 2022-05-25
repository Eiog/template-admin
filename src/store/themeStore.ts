import { defineStore } from "pinia";
export const themeStore = defineStore({
    id:'themeStore',
    state:()=>({
        asideCollapse:false,
        mode:'light',
        themeColor:'red'
    }),
    actions:{

    },
    getters:{
        
    }
})