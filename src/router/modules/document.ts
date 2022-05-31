import { RouteRecordRaw } from 'vue-router';
import BasicLayout from '@/views/layout/BasicLayout.vue';
const documentRoute: RouteRecordRaw = {
    path: '/document',
    name: 'document',
    component: BasicLayout,
    meta: {
        title: '文档',
        icon: 'ri-file-list-line',
        requiresAuth: true,
        keepAlive: true,
        hide: false,
        href: '',
        order: 1
    },
    children: [
        {
            path: '/document/vue',
            name: 'vue',
            component: () => import('@/views/document/vue/index.vue'),
            meta: {
                title: 'vue文档',
                icon: 'ri-vuejs-line',
                requiresAuth: true,
                keepAlive: true,
                hide: false,
                href: '',
                order: 1
            }
        },
        {
            path: '/document/vite',
            name: 'vite',
            component: () => import('@/views/document/vite/index.vue'),
            meta: {
                title: 'vite文档',
                icon: 'ri-slideshow-line',
                requiresAuth: true,
                keepAlive: true,
                hide: false,
                href: '',
                order: 1
            }
        },
    ]

}
export default documentRoute