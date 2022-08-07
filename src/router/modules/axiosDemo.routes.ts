import { RouteRecordRaw } from 'vue-router';
import BasicLayout from '@/views/layout/BasicLayout.vue';
const RepeatRequest = () => import('@/views/axios-demo/repeat-request/index.vue')
const StatusNotification = () => import('@/views/axios-demo/status-notification/index.vue')
const pluginRoute: RouteRecordRaw = {
    path: '/axios-demo',
    name: 'axios-demo',
    component: BasicLayout,
    meta: {
        title: 'Axios示例',
        icon: 'ri-git-pull-request-line',
        requiresAuth: true,
        role: ['user', 'admin', 'super'],
        keepAlive: true,
        hide: false,
        href: '',
        order: 1,
    },
    redirect: '/axios-demo/repeat-request',
    children: [
        {
            path: '/axios-demo/repeat-request',
            name: RepeatRequest.name,
            component: RepeatRequest,
            meta: {
                title: '重复请求拦截',
                icon: 'ri-git-branch-line',
                requiresAuth: true,
                role: ['user', 'admin', 'super'],
                keepAlive: true,
                hide: false,
                href: '',
                order: 1
            }
        },
        {
            path: '/axios-demo/status-notification',
            name: StatusNotification.name,
            component: StatusNotification,
            meta: {
                title: '重复状态码通知合并',
                icon: 'ri-git-merge-line',
                requiresAuth: true,
                role: ['user', 'admin', 'super'],
                keepAlive: true,
                hide: false,
                href: '',
                order: 1
            }
        },
    ]

}
export default pluginRoute