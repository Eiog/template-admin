# U-Admin 是一个以Vite-Vue3开发的后台管理系统基础开发模板，没有过多的封装，可使开发者快速进行开发！

# 😊快速的 Fast!!!
基于最新技术栈，Vite2+Vue3+Vue-Router+Pinia+TS开发。
# 🤦‍♂️Axios+Mock模拟数据
二次封装Axios请求防抖，开发以及构建均支持Mock模拟数据
# 🎉集成Naive-UI，可配置的主题以及缓存 原子化CSS UnoCSS
比较完整，主题可调，使用 TypeScript，快 有点意思 antfu大佬的原子化css，好用
# 🐱‍🏍组件、图标 自动引入
icons图标自动引入，自定义组件以及naive组件自动引入
# 👀Vue-Router 守卫权限控制
Menu 以及 Tab 动态权限显示。
# 👏多种插件示例
视频播放器，富文本，打印，剪切板，Swiper，图表，水印(自定义指令)

## Vite2|Vue3|Vue-Router|Pinia|VueUse|Axios|Naive-UI|UnoCSS|Echarts|Nprogress|

## 环境准备
需要 Node.js 版本 >= 14.0.0
## 工具配置
IDE推荐使用vscode，并安装以下插件
- Vue Language Features (Volar)
- Vue 3 Snippets
- UnoCSS
- WindiCSS IntelliSense
- TSLint
- Prettier - Code formatter
- Beautify
## 拉取代码
``` sh
git clone https://gitee.com/cxice/unlit-admin-template.git
cd unlit-admin-template
```
## 安装依赖
``` sh
pnpm i
```
## 运行
``` sh
npm run dev
```
![alt](/public/img/Snipaste_2022-06-16_10-06-46.png)

# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
