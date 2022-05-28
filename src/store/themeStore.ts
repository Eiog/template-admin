import { defineStore } from "pinia";
export const themeStore = defineStore({
    id:'themeStore',
    state:()=>({
        asideCollapse:false,
        darkMode:false,
        themeColor:'red',
        common:{
            primaryColor:'',
            primaryColorHover:'',
            primaryColorPressed:'',
            primaryColorSuppl:''
        }

        
    }),
    actions:{

    },
    getters:{
        
    }
})