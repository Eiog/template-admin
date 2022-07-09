import { defineStore } from "pinia";
import { darkTheme,useOsTheme } from 'naive-ui';
import { createPersistedState } from 'pinia-plugin-persistedstate'
import {getDefaultThemeSetting,getNaiveThemeOverrides} from './_methods'
export const useThemeStore = defineStore({
    id:'themeStore',
    persist: {
        key: 'DefaultThemeSetting',
        paths: ['getDefaultThemeSetting']
      },
    state:()=>getDefaultThemeSetting(),
    actions:{
        followSysMode(value:boolean){
            if(value) this.darkMode = useOsTheme().value === 'dark'?true:false
        },
        resetTheme(){
            this.$reset()
        }
    },
    getters:{
        naiveThemeOverrides(state){
            return getNaiveThemeOverrides({primary:state.themeColor,...state.otherColor})
        },
        naiveThemeMode(state){
            state.darkMode?document.body.classList.add('dark'):document.body.classList.remove('dark')
            return state.darkMode?darkTheme:undefined
        }
    }
})