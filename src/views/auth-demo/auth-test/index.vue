<script lang="ts">
export default {
  name: "AuthTest",
};
</script>
<script setup lang="ts">
import { NCard, NButton,NSpace } from "naive-ui";
import { useAuthStore } from "@/store";
const authStore = useAuthStore();
const changeAuth = function(auth:any){
  authStore.auth = auth
}
</script>
<template>
  <div class="w-full h-full">
    <n-card title="权限测试" :bordered="false" class="rounded-16px shadow-sm">
      <p>当前权限为：{{ authStore.auth }}</p>
      <n-space class="mt-3">
        <n-button type="primary" size="medium" @click="changeAuth('user')">切换为普通用户</n-button>
        <n-button type="primary" size="medium" @click="changeAuth('admin')">切换为管理员</n-button>
        <n-button type="primary" size="medium" @click="changeAuth('super')">切换为超级管理员</n-button>
      </n-space>
    </n-card>
  </div>
</template>
<style scoped lang="less"></style>
