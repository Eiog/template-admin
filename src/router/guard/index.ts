import { Router, NavigationGuardNext } from 'vue-router'
import { useNProgress, useTab, useAuth } from './methods';
import { useTabStore } from '@/store';
export function createGuard(router: Router) {
    const { start, done } = useNProgress()
    router.beforeEach((to, from, next) => {
        start()
        useTab(to)
        useAuth(to).then((path) => { 
            next(path as NavigationGuardNext)
         })
    })
    router.afterEach((to, from) => {
        useTabStore().loaded()
        done()
    });
}