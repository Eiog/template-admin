<script lang="ts">
export default {
  name: "AuthSuper",
};
</script>
<script setup lang="ts">
import { NCard } from "naive-ui";
</script>
<template>
  <div class="w-full h-full">
    <n-card
      title="此页面超级管理员可见"
      :bordered="false"
      class="rounded-16px shadow-sm"
    >
    </n-card>
  </div>
</template>
<style scoped lang="less"></style>
