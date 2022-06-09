
export function getAuthTab(tabs:AuthTab.Tab[],auth:AuthRoute.RoleType){
    let resTab:AuthTab.Tab[] = new Array
    tabs.forEach((tab)=>{
        if(!tab.role.includes(auth)) return
        resTab.push(tab)
    })
    return resTab
}