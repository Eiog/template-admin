import { Router } from 'vue-router'
import NProgress from 'nprogress';
const useProgress = function (router: Router) {
    router.beforeEach((to, from, next) => {
        document.title = (to.meta.title as string) || import.meta.env.VITE_APP_TITLE as string;
        if (!NProgress.isStarted()) {
            NProgress.start();
        }
        if(to.meta.href){
            window.open(to.meta.href as string)
            router.go(-1)
            return
        }
        next()
    })
    router.afterEach((to, from) => {
        NProgress.done();
    });
}
export default useProgress