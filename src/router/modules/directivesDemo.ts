import { RouteRecordRaw } from 'vue-router';
import BasicLayout from '@/views/layout/BasicLayout.vue';
import waterMark from '@/views/directives-demo/water-mark/index.vue'
const pluginRoute: RouteRecordRaw = {
    path: '/directives-demo',
    name: 'directives-demo',
    component: BasicLayout,
    meta: {
        title: '自定义指令示例',
        icon: 'ri-git-pull-request-line',
        requiresAuth: true,
        role:['user','admin','super'],
        keepAlive: true,
        hide: false,
        href: '',
        order: 1,
    },
    redirect:'/directives-demo/water-mark',
    children: [
        {
            path: '/directives-demo/water-mark',
            name: waterMark.name,
            component: waterMark,
            meta: {
                title: '水印',
                icon: 'ri-git-branch-line',
                requiresAuth: true,
                role:['user','admin','super'],
                keepAlive: true,
                hide: false,
                href: '',
                order: 1
            }
        },  
          
    ]

}
export default pluginRoute