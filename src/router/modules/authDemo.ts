import { RouteRecordRaw } from 'vue-router';
import BasicLayout from '@/views/layout/BasicLayout.vue';
import AuthTest from '@/views/auth-demo/auth-test/index.vue'
import AuthSuper from '@/views/auth-demo/auth-super/index.vue'
const pluginRoute: RouteRecordRaw = {
    path: '/auth-demo',
    name: 'auth-demo',
    component: BasicLayout,
    meta: {
        title: '权限示例',
        icon: 'ri-admin-line',
        requiresAuth: true,
        permissions:['user','admin','super'],
        keepAlive: true,
        hide: false,
        href: '',
        order: 1,
    },
    redirect:'/auth-demo/auth-test',
    children: [
        {
            path: '/auth-demo/auth-test',
            name: AuthTest.name,
            component: AuthTest,
            meta: {
                title: '权限测试',
                icon: 'ri-key-2-line',
                requiresAuth: true,
                permissions:['user','admin','super'],
                keepAlive: true,
                hide: false,
                href: '',
                order: 1
            }
        },
        {
            path: '/auth-demo/auth-super',
            name: AuthSuper.name,
            component: AuthSuper,
            meta: {
                title: '超级管理员可见',
                icon: 'ri-handbag-line',
                requiresAuth: true,
                permissions:['super'],
                keepAlive: true,
                hide: false,
                href: '',
                order: 1
            }
        },
        
    ]

}
export default pluginRoute