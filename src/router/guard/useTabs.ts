import { Router } from 'vue-router'
import { getStorage } from '@/utils/storage'
import { tabsStore } from '@/store/tabsStore';
const useTabs = function (router: Router) {
    router.beforeEach((to, from, next) => {
        if(to.meta.requiresAuth){
            tabsStore().setTab(to)
        }
        next()
    })
}
export default useTabs