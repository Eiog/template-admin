<script lang='ts'>
export default{
    name:'Header'
}
</script>
<script setup lang='ts'>
import {themeStore} from '@/store/themeStore'
import { useRoute } from 'vue-router';
const route = useRoute()
const theme = themeStore()
</script>
<template>
    <div class="h-full flex items-center">
        <div class="h-full flex items-center justify-center px-4 transition-colors duration-300 ease-in-out cursor-pointer text-xl hover:bg-light-900" @click="theme.asideCollapse = !theme.asideCollapse">
            <i :class="theme.asideCollapse?'ri-menu-unfold-line':'ri-menu-fold-line'"></i>
        </div>
        <div class="hh">
            {{route.path}}
        </div>
        <div class="h-full flex items-center justify-center px-4 transition-colors duration-300 ease-in-out cursor-pointer text-xl hover:bg-light-900">
            <i class="ri-search-2-line"></i>
        </div>
        <div class="h-full flex items-center justify-center px-4 transition-colors duration-300 ease-in-out cursor-pointer text-xl hover:bg-light-900">
            <i class="ri-github-line"></i>
        </div>
        <div class="h-full flex items-center justify-center px-4 transition-colors duration-300 ease-in-out cursor-pointer text-xl hover:bg-light-900">
            <i class="ri-fullscreen-line"></i>
        </div>
        <div class="h-full flex items-center justify-center px-4 transition-colors duration-300 ease-in-out cursor-pointer text-xl hover:bg-light-900">
            <i class="ri-sun-line"></i>
        </div>
        <div class="h-full flex items-center justify-center px-4 transition-colors duration-300 ease-in-out cursor-pointer text-xl hover:bg-light-900 user">
            user
        </div>
    </div>
</template>
<style scoped>
.hh{
    @apply h-full flex items-center justify-center px-4 transition-colors duration-300 ease-in-out cursor-pointer text-xl hover:bg-light-900;
}
</style>