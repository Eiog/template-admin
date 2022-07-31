import { Router } from 'vue-router'
import { useNProgress, useTab, useAuth,useChangeTitle } from './_methods';
import { useTabStore } from '@/store';
export function createGuard(router: Router) {
    const { start, done } = useNProgress()
    router.beforeEach((to, from, next) => {
        start()
        useTab(to)
        useAuth(to,from,next)
    })
    router.afterEach((to, from) => {
        useChangeTitle(to)
        useTabStore().loaded()
        done()
    });
}