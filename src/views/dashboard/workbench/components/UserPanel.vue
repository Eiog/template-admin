<script lang="ts">
export default {
  name: "",
};
</script>
<script setup lang="ts">
import { NCard,NAvatar } from 'naive-ui';
import { useAuthStore } from '@/store';
const authStore = useAuthStore()
</script>
<template>
    <n-card :bordered="false" class="w-full h-120px rounded-16px shadow-sm">
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
                <n-avatar round :size="80" :src="authStore.user?.avatar"></n-avatar>
                <div class="">
                    <p class="text-xl font-bold">早安，{{authStore.user?.nickName}} ,今天又是充满活力的一天！</p>
                    <p class="text-gray-400">今日多云转晴，20℃ - 25℃！</p>
                </div>
            </div>
            <div class="flex items-center gap-5">
                <div class="flex flex-col items-center">
                    <p>项目数</p>
                    <p class="text-2xl">12</p>
                </div>
                <div class="flex flex-col items-center">
                    <p>待办</p>
                    <p class="text-2xl">5/12</p>
                </div>
                <div class="flex flex-col items-center">
                    <p>消息</p>
                    <p class="text-2xl">23</p>
                </div>
            </div>
        </div>
    </n-card>
</template>
<style scoped lang="less"></style>
