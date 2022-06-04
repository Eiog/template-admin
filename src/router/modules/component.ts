import { RouteRecordRaw } from 'vue-router';
import BasicLayout from '@/views/layout/BasicLayout.vue';
import button from '@/views/component/button/index.vue'
import card from '@/views/component/card/index.vue'
import table from '@/views/component/table/index.vue'

const componentRoute: RouteRecordRaw = {
    path: '/component',
    name: 'component',
    component: BasicLayout,
    meta: {
        title: '组件',
        icon: 'ri-dashboard-line',
        requiresAuth: true,
        permissions:['user','admin','super'],
        keepAlive: true,
        hide: false,
        href: '',
        order: 1,
    },
    children: [
        {
            path: '/component/button',
            name: button.name,
            component: button,
            meta: {
                title: '按钮',
                icon: 'ri-radio-button-line',
                requiresAuth: true,
                permissions:['user','admin','super'],
                keepAlive: true,
                hide: false,
                href: '',
                order: 1
            }
        },
        {
            path: '/component/card',
            name: card.name,
            component: card,
            meta: {
                title: '卡片',
                icon: 'ri-layout-top-line',
                requiresAuth: true,
                permissions:['user','admin','super'],
                keepAlive: true,
                hide: false,
                href: '',
                order: 1
            }
        },
        {
            path: '/component/table',
            name: table.name,
            component: table,
            meta: {
                title: '表格',
                icon: 'ri-table-2',
                requiresAuth: true,
                permissions:['user','admin','super'],
                keepAlive: true,
                hide: false,
                href: '',
                order: 1
            }
        },
    ]

}
export default componentRoute