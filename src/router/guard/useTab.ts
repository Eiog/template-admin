import { Router } from 'vue-router'
import { getStorage } from '@/utils/storage'
import { useTabStore } from '@/store';
const useTabs = function (router: Router) {
    router.beforeEach((to, from, next) => {
        if(to.meta.requiresAuth){
            useTabStore().setTab(to)
        }
        next()
    })
}
export default useTabs