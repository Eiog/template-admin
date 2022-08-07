// 不需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router';
import BlankLayout from '@/views/layout/BlankLayout.vue';
const Login = () => import('@/views/system-views/login/index.vue')
const NotFound = () => import('@/views/system-views/not-found/index.vue')
export const commonRoutes: Array<RouteRecordRaw> = [
    {
        path: '/not-found',
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
        redirect: '/not-found',
        children: [
            {
                path: '/login',
                name: Login.name,
                component: Login,
                meta: {
                    title: '登录',
                    icon: '',
                    requiresAuth: false,
                    keepAlive: false,
                    hide: true,
                    href: '',
                    order: 1
                },
            },
            {
                path: '/not-found',
                name: NotFound.name,
                component: NotFound,
                meta: {
                    title: '页面找不到了',
                    icon: '',
                    requiresAuth: false,
                    keepAlive: false,
                    hide: true,
                    href: '',
                    order: 1
                },
            },
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: "/not-found"
    }
];

