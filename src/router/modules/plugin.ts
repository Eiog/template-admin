import { RouteRecordRaw } from 'vue-router';
import BasicLayout from '@/views/layout/BasicLayout.vue';
import BlankLayout from '@/views/layout/BlankLayout.vue';
import Video from '@/views/plugin/video/index.vue'
import Print from '@/views/plugin/print/index.vue'
import Editor from '@/views/plugin/editor/index.vue'
import Map from '@/views/plugin/map/index.vue'
import Clipboard from '@/views/plugin/clipboard/index.vue'
import Swiper from '@/views/plugin/swiper/index.vue'
import Charts from '@/views/plugin/charts/index.vue'
import ECharts from '@/views/plugin/charts/echarts/index.vue'
const pluginRoute: RouteRecordRaw = {
    path: '/plugin',
    name: 'plugin',
    component: BasicLayout,
    meta: {
        title: '插件',
        icon: 'ri-apps-line',
        requiresAuth: true,
        permissions:['user','admin','super'],
        keepAlive: true,
        hide: false,
        href: '',
        order: 1,
    },
    redirect:'/plugin/video',
    children: [
        {
            path: '/plugin/video',
            name: Video.name,
            component: Video,
            meta: {
                title: '视频',
                icon: 'ri-bubble-chart-line',
                requiresAuth: true,
                permissions:['user','admin','super'],
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
                permissions:['user','admin','super'],
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
                icon: 'ri-bubble-chart-line',
                requiresAuth: true,
                permissions:['user','admin','super'],
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
                title: '打印',
                icon: 'ri-bubble-chart-line',
                requiresAuth: true,
                permissions:['user','admin','super'],
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
                icon: 'ri-bubble-chart-line',
                requiresAuth: true,
                permissions:['user','admin','super'],
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
                permissions:['user','admin','super'],
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
                title: '图表',
                icon: 'ri-bubble-chart-line',
                requiresAuth: true,
                permissions:['user','admin','super'],
                keepAlive: true,
                hide: false,
                href: '',
                order: 1
            },
            redirect:'/plugin/charts/echarts',
            children:[
                {
                    path: '/plugin/charts/echarts',
                    name: ECharts.name,
                    component: ECharts,
                    meta: {
                        title: 'ECharts',
                        icon: 'ri-bubble-chart-line',
                        requiresAuth: true,
                        permissions:['user','admin','super'],
                        keepAlive: true,
                        hide: false,
                        href: '',
                        order: 1
                    },
                }
            ]
        },
    ]

}
export default pluginRoute