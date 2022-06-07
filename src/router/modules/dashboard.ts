import { RouteRecordRaw } from 'vue-router';
import BasicLayout from '@/views/layout/BasicLayout.vue';
import analysis from '@/views/dashboard/analysis/index.vue'
import workbench from '@/views/dashboard/workbench/index.vue'

const dashboardRoute: RouteRecordRaw = {
    path: '/dashboard',
    name: 'dashboard',
    component: BasicLayout,
    meta: {
        title: '仪表盘',
        icon: 'ri-apps-line',
        requiresAuth: true,
        permissions:['admin','super'],
        keepAlive: true,
        hide: false,
        href: '',
        order: 1,
    },
    children: [
        {
            path: '/dashboard/analysis',
            name: analysis.name,
            component: analysis,
            meta: {
                title: '分析页',
                icon: 'ri-bubble-chart-line',
                requiresAuth: true,
                permissions:['admin','super'],
                keepAlive: true,
                hide: false,
                href: '',
                order: 1
            }
        },
        {
            path: '/dashboard/workbench',
            name: workbench.name,
            component: workbench,
            meta: {
                title: '工作台',
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
export default dashboardRoute