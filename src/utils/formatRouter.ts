import { RouteRecordRaw } from 'vue-router';
interface routeItem{
    path:string,
    meta:{
        title:string
    }
}
export const routerToMenu = function(routes:Array<routeItem>){
    let menus = new Array
    routes.map((item:routeItem)=>{
        menus.push({
            lable:item.meta.title
        })
        
    })
}