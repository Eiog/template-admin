import { Router } from 'vue-router'
import { useNProgress, useTab, useAuth } from './methods';
import { useTabStore } from '@/store';
export function createGuard(router: Router) {
    const { start, done } = useNProgress()
    router.beforeEach((to, from, next) => {
        start()
        useTab(to)
        useAuth(to,from,next)
    })
    router.afterEach((to, from) => {
        useTabStore().loaded()
        done()
    });
}