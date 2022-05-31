import {h,Component} from 'vue'
import { RouteRecordRaw } from 'vue-router';
import { NIcon } from 'naive-ui';
import type { MenuOption } from 'naive-ui'
function renderIcon (icon: string) {
    return () => h(NIcon, null, { default: () => h('i',{class:icon},{}) })
  }
type menuItem = {
    label:string|unknown,
    key:string|unknown,
    icon:Component,
    disabled?:boolean|unknown,
    children?:menuItem|unknown
}
export function routerToMenu (routes:RouteRecordRaw[]) {
    let arr:any = []
    routes.forEach((item)=>{
        if(!item.meta) return
        if(item.meta.hide) return
        let menuItem:MenuOption = {
            label:item.meta.title,
            key:item.name as string,
            icon:renderIcon(item.meta.icon as any)
        }
        if(item.children){
            menuItem.children = routerToMenu(item.children)
        }
        arr.push(menuItem)
    })
    return arr
}
export function setComponentName(routes:RouteRecordRaw[]){
    routes.forEach((item:any)=>{
        // item.component.name = item.name
        console.log(item);
        if(item.children){
            setComponentName(item.children)
        }
    })
}