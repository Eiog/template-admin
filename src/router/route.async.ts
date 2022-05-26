// 需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router';

const asyncRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/dashboard/analysis',
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/layout/index.vue'),
        meta: {
            title: '仪表盘',
            icon: 'ri-apps-line',
            requiresAuth: true,
            keepAlive: true,
            hide: false,
            href: '',
            order: 1
        },
        children: [
            {
                path: 'analysis',
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
                path: 'workbench',
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

    },
];

export default asyncRoutes;
