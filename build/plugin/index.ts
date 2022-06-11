import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'
/**
 * * 扩展setup插件，支持在script标签中使用name属性
 * usage: <script setup name="MyComp"></script>
 */
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

/**
 * * 组件库按需引入插件
 * usage: 直接使用组件,无需在任何地方导入组件
 */
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

/**
 * * unplugin-icons插件，自动引入iconify图标
 * usage: https://github.com/antfu/unplugin-icons
 * 图标库: https://icones.js.org/
 */
import Icons from 'unplugin-icons/vite'

// rollup打包分析插件
import visualizer from 'rollup-plugin-visualizer'
//代码压缩
import compressPlugin from 'vite-plugin-compression';

import { createMockServe } from './mock'
export function createVitePlugins(isBuild) {
    const plugin = [
        vue(),
        VueSetupExtend(),
        Components({
            resolvers: [NaiveUiResolver()]
        }),
        Icons({ compiler: 'vue3', autoInstall: true }),
        Unocss({
            presets: [presetUno(), presetAttributify(), presetIcons()],
        }),
        createMockServe(isBuild),
        visualizer({
            filename: './node_modules/.cache/visualizer/stats.html',
            open: true,
            gzipSize: true,
            brotliSize: true,
        }),
        compressPlugin({
            ext: '.gz',
            deleteOriginFile: false,
        })
    ]
    return plugin
}
export function createProxy(isBuild, prefix: string) {
    const reg = new RegExp("/^" + prefix + "/")
    const api = {
        prefix: {
            target: 'http://localhost:3000/' + prefix,
            changeOrigin: true,
            rewrite: path => path.replace(reg, '')
        }
    }
}