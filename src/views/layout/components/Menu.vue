<script lang='ts'>
export default{
    name:'Menu'
}
</script>
<script setup lang='ts'>
import { ref } from 'vue';
import {NMenu} from 'naive-ui'
import asyncRoutes from '@/router/route.async'
import {routerToMenu} from '@/utils/formatRouter'
routerToMenu(asyncRoutes)

</script>
<template>
<aside class="menu">
    <n-menu
        :options="menuOptions"
        :default-expanded-keys="defaultExpandedKeys"
        @update:expanded-keys="handleUpdateExpandedKeys"
    />
</aside>
</template>
<style scoped lang='less'>

</style>