import { RouteRecordRaw } from 'vue-router';
import BasicLayout from '@/views/layout/BasicLayout.vue';
import Vue from '@/views/document/vue/index.vue'
import Vite from '@/views/document/vite/index.vue'
import Pinia from '@/views/document/pinia/index.vue'
import UnoCSS from '@/views/document/unocss/index.vue'
import NaiveUI from '@/views/document/naiveui/index.vue'

const documentRoute: RouteRecordRaw = {
    path: '/document',
    name: 'document',
    component: BasicLayout,
    meta: {
        title: '文档',
        icon: 'ri-file-list-line',
        requiresAuth: true,
        role:['admin','super'],
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
                role:['admin','super'],
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
                role:['admin','super'],
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
                role:['admin','super'],
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
                role:['admin','super'],
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
                role:['admin','super'],
                keepAlive: true,
                hide: false,
                href: '',
                order: 1
            }
        },
    ]

}
export default documentRoute