import { RouteRecordRaw } from 'vue-router';
import BasicLayout from '@/views/layout/BasicLayout.vue';
const Draggable = () => import('@/views/draggable-demo/index.vue')
const draggableRoute: RouteRecordRaw = {
    path: '/draggable',
    name: 'draggable',
    component: BasicLayout,
    meta: {
        title: '拖拽示例',
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
            path: '',
            name: Draggable.name,
            component: Draggable,
            meta: {
                title: '拖拽示例',
                icon: 'ri-vuejs-line',
                requiresAuth: true,
                role: ['admin', 'super'],
                keepAlive: true,
                hide: false,
                href: '',
                order: 1
            }
        }
    ]
}
export default draggableRoute