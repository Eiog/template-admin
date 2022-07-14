import { RouteRecordRaw } from 'vue-router';
import BasicLayout from '@/views/layout/BasicLayout.vue';
import BlankLayout from '@/views/layout/BlankLayout.vue';
import Video from '@/views/plugin-demo/video/index.vue'
import Print from '@/views/plugin-demo/print/index.vue'
import Editor from '@/views/plugin-demo/editor/index.vue'
import Map from '@/views/plugin-demo/map/index.vue'
import Clipboard from '@/views/plugin-demo/clipboard/index.vue'
import Swiper from '@/views/plugin-demo/swiper/index.vue'
import ECharts from '@/views/plugin-demo/charts/echarts/index.vue'
import LargeScreen from '@/views/plugin-demo/charts/large-screen/large-screen.vue'
import AutoAnimate from '@/views/plugin-demo/auto-animate/index.vue'
const pluginRoute: RouteRecordRaw = {
    path: '/plugin',
    name: 'plugin',
    component: BasicLayout,
    meta: {
        title: '插件示例',
        icon: 'ri-plug-line',
        requiresAuth: true,
        role: ['admin', 'super'],
        keepAlive: true,
        hide: false,
        href: '',
        order: 1,
    },
    redirect: '/plugin/video',
    children: [
        {
            path: '/plugin/video',
            name: Video.name,
            component: Video,
            meta: {
                title: '视频播放器',
                icon: 'ri-video-line',
                requiresAuth: true,
                role: ['admin', 'super'],
                keepAlive: true,
                hide: false,
                href: '',
                order: 1
            }
        },
        {
            path: '/plugin/map',
            name: Map.name,
            component: Map,
            meta: {
                title: '地图',
                icon: 'ri-bubble-chart-line',
                requiresAuth: true,
                role: ['admin', 'super'],
                keepAlive: true,
                hide: false,
                href: '',
                order: 1
            }
        },
        {
            path: '/plugin/editor',
            name: Editor.name,
            component: Editor,
            meta: {
                title: '富文本编辑器',
                icon: 'ri-edit-box-line',
                requiresAuth: true,
                role: ['admin', 'super'],
                keepAlive: true,
                hide: false,
                href: '',
                order: 1
            }
        },
        {
            path: '/plugin/print',
            name: Print.name,
            component: Print,
            meta: {
                title: '打印示例',
                icon: 'ri-printer-line',
                requiresAuth: true,
                role: ['admin', 'super'],
                keepAlive: true,
                hide: false,
                href: '',
                order: 1
            }
        },
        {
            path: '/plugin/clipboard',
            name: Clipboard.name,
            component: Clipboard,
            meta: {
                title: '剪切板',
                icon: 'ri-clipboard-line',
                requiresAuth: true,
                role: ['admin', 'super'],
                keepAlive: true,
                hide: false,
                href: '',
                order: 1
            }
        },
        {
            path: '/plugin/swiper',
            name: Swiper.name,
            component: Swiper,
            meta: {
                title: 'Swiper',
                icon: 'ri-bubble-chart-line',
                requiresAuth: true,
                role: ['admin', 'super'],
                keepAlive: true,
                hide: false,
                href: '',
                order: 1
            }
        },
        {
            path: '/plugin/charts',
            name: BlankLayout.name,
            component: BlankLayout,
            meta: {
                title: '图表示例',
                icon: 'ri-pie-chart-line',
                requiresAuth: true,
                role: ['admin', 'super'],
                keepAlive: true,
                hide: false,
                href: '',
                order: 1
            },
            redirect: '/plugin/charts/echarts',
            children: [
                {
                    path: '/plugin/charts/echarts',
                    name: ECharts.name,
                    component: ECharts,
                    meta: {
                        title: 'ECharts',
                        icon: 'ri-line-chart-line',
                        requiresAuth: true,
                        role: ['admin', 'super'],
                        keepAlive: true,
                        hide: false,
                        href: '',
                        order: 1
                    },
                },
                {
                    path: '/plugin/charts/large-screen',
                    name: LargeScreen.name,
                    component: LargeScreen,
                    meta: {
                        title: 'LargeScreen',
                        icon: 'ri-line-chart-line',
                        requiresAuth: true,
                        role: ['admin', 'super'],
                        keepAlive: true,
                        hide: false,
                        href: '',
                        order: 1
                    },
                },
            ]
        },
        {
            path: '/plugin/auto-animate',
            name: AutoAnimate.name,
            component: AutoAnimate,
            meta: {
                title: 'AutoAnimate',
                icon: 'ri-pie-chart-line',
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
export default pluginRoute