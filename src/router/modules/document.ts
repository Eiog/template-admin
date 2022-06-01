import { RouteRecordRaw } from 'vue-router';
import BasicLayout from '@/views/layout/BasicLayout.vue';
import documentVue from '@/views/document/document-vue/index.vue'
import documentVite from '@/views/document/document-vite/index.vue'

const documentRoute: RouteRecordRaw = {
    path: '/document',
    name: 'document',
    component: BasicLayout,
    meta: {
        title: '文档',
        icon: 'ri-file-list-line',
        requiresAuth: true,
        permissions:['admin','super'],
        keepAlive: true,
        hide: false,
        href: '',
        order: 1
    },
    children: [
        {
            path: '/document/vue',
            name: documentVue.name,
            component: documentVue,
            meta: {
                title: 'vue文档',
                icon: 'ri-vuejs-line',
                requiresAuth: true,
                permissions:['admin','super'],
                keepAlive: true,
                hide: false,
                href: '',
                order: 1
            }
        },
        {
            path: '/document/vite',
            name: documentVite.name,
            component: documentVite,
            meta: {
                title: 'vite文档',
                icon: 'ri-slideshow-line',
                requiresAuth: true,
                permissions:['admin','super'],
                keepAlive: true,
                hide: false,
                href: '',
                order: 1
            }
        },
    ]

}
export default documentRoute