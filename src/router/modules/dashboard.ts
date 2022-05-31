import { RouteRecordRaw } from 'vue-router';
import BasicLayout from '@/views/layout/BasicLayout.vue';
const dashboardRoute: RouteRecordRaw = {
    path: '/dashboard',
    name: 'dashboard',
    component: BasicLayout,
    meta: {
        title: '仪表盘',
        icon: 'ri-apps-line',
        requiresAuth: true,
        keepAlive: true,
        hide: false,
        href: '',
        order: 1,
        layoutMode: 'basic'
    },
    children: [
        {
            path: '/dashboard/analysis',
            name: 'analysis',
            component: () => import('@/views/dashboard/analysis/index.vue'),
            meta: {
                title: '分析页',
                icon: 'ri-bubble-chart-line',
                requiresAuth: true,
                keepAlive: true,
                hide: false,
                href: '',
                order: 1
            }
        },
        {
            path: '/dashboard/workbench',
            name: 'workbench',
            component: () => import('@/views/dashboard/workbench/index.vue'),
            meta: {
                title: '工作台',
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
export default dashboardRoute