import { RouteRecordRaw } from 'vue-router';
import BasicLayout from '@/views/layout/BasicLayout.vue';
const Vue = () => import('@/views/document/vue/index.vue')
const Vite = () => import('@/views/document/vite/index.vue')
const Pinia = () => import('@/views/document/pinia/index.vue')
const UnoCSS = () => import('@/views/document/unocss/index.vue')
const NaiveUI = () => import('@/views/document/naiveui/index.vue')

const documentRoute: RouteRecordRaw = {
    path: '/document',
    name: 'document',
    component: BasicLayout,
    meta: {
        title: '文档',
        icon: 'ri-file-list-line',
        requiresAuth: true,
        role: ['admin', 'super'],
        keepAlive: true,
        hide: false,
        href: '',
        order: 1
    },
    children: [
        {
            path: '/document/vue',
            name: Vue.name,
            component: Vue,
            meta: {
                title: 'Vue文档',
                icon: 'ri-vuejs-line',
                requiresAuth: true,
                role: ['admin', 'super'],
                keepAlive: true,
                hide: false,
                href: '',
                order: 1
            }
        },
        {
            path: '/document/vite',
            name: Vite.name,
            component: Vite,
            meta: {
                title: 'Vite文档',
                icon: 'ri-slideshow-line',
                requiresAuth: true,
                role: ['admin', 'super'],
                keepAlive: true,
                hide: false,
                href: '',
                order: 1
            }
        },
        {
            path: '/document/pinia',
            name: Pinia.name,
            component: Pinia,
            meta: {
                title: 'Pinia文档',
                icon: 'ri-slideshow-line',
                requiresAuth: true,
                role: ['admin', 'super'],
                keepAlive: true,
                hide: false,
                href: '',
                order: 1
            }
        },
        {
            path: '/document/unocss',
            name: UnoCSS.name,
            component: UnoCSS,
            meta: {
                title: 'UnoCSS文档',
                icon: 'ri-slideshow-line',
                requiresAuth: true,
                role: ['admin', 'super'],
                keepAlive: true,
                hide: false,
                href: '',
                order: 1
            }
        },
        {
            path: '/document/naiveui',
            name: NaiveUI.name,
            component: NaiveUI,
            meta: {
                title: 'NaiveUI文档',
                icon: 'ri-slideshow-line',
                requiresAuth: true,
                role: ['admin', 'super'],
                keepAlive: true,
                hide: false,
                href: '',
                order: 1
            }
        },
    ]

}
export default documentRoute