import { RouteRecordRaw } from 'vue-router';
import BasicLayout from '@/views/layout/BasicLayout.vue';
const Button = () => import('@/views/component/button/index.vue');
const Card = () => import('@/views/component/card/index.vue');
const Table = () => import('@/views/component/table/index.vue');

const componentRoute: RouteRecordRaw = {
    path: '/component',
    name: 'component',
    component: BasicLayout,
    meta: {
        title: '组件',
        icon: 'ri-dashboard-line',
        requiresAuth: true,
        role: ['admin', 'super'],
        keepAlive: true,
        hide: false,
        href: '',
        order: 1,
    },
    children: [
        {
            path: '/component/button',
            name: Button.name,
            component: Button,
            meta: {
                title: '按钮',
                icon: 'ri-radio-button-line',
                requiresAuth: true,
                role: ['admin', 'super'],
                keepAlive: true,
                hide: false,
                href: '',
                order: 1
            }
        },
        {
            path: '/component/card',
            name: Card.name,
            component: Card,
            meta: {
                title: '卡片',
                icon: 'ri-layout-top-line',
                requiresAuth: true,
                role: ['admin', 'super'],
                keepAlive: true,
                hide: false,
                href: '',
                order: 1
            }
        },
        {
            path: '/component/table',
            name: Table.name,
            component: Table,
            meta: {
                title: '表格',
                icon: 'ri-table-2',
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
export default componentRoute