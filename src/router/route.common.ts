// 不需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router';
import BlankLayout from '@/views/layout/BlankLayout.vue';
const commonRoutes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: '',
        component: BlankLayout,
        meta: {
            title: '登录页',
            icon: '',
            requiresAuth: false,
            keepAlive: false,
            hide: true,
            href: '',
            order: 1
        },
        children: [
            {
                path: '',
                name: 'login',
                component: () => import('@/views/login/index.vue'),
                meta: {
                    title: '登录',
                    icon: '',
                    requiresAuth: false,
                    keepAlive: false,
                    hide: true,
                    href: '',
                    order: 1
                },
            }
        ]
    }
];

export default commonRoutes;
