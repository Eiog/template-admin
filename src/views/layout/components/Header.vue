<script lang='ts'>
export default{
    name:'Header'
}
</script>
<script setup lang='ts'>
import {themeStore} from '@/store/themeStore'
const theme = themeStore()
</script>
<template>
    <div class="header">
        <div class="header-item header-btn" @click="theme.asideCollapse = !theme.asideCollapse">
            <i :class="theme.asideCollapse?'ri-menu-unfold-line':'ri-menu-fold-line'"></i>
        </div>
        <div class="header-item navigation">
            navigation
        </div>
        <div class="header-item header-btn">
            <i class="ri-search-2-line"></i>
        </div>
        <div class="header-item header-btn">
            <i class="ri-github-line"></i>
        </div>
        <div class="header-item header-btn">
            <i class="ri-fullscreen-line"></i>
        </div>
        <div class="header-item header-btn">
            <i class="ri-sun-line"></i>
        </div>
        <div class="header-item header-btn user">
            user
        </div>
    </div>
</template>
<style scoped lang='less'>
.header{
    display: flex;
    align-items: center;
    padding: 0 10px;
    .header-item{
        cursor: pointer;
        height: 100%;
        padding: 0 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all .3s;
    }
    .header-btn{

    }
    .header-btn:hover{
        background: rgba(124, 124, 124, 0.1);
    }
    .navigation{
        margin-right: auto;
    }
}
</style>