<script setup lang="ts">
import { NMessageProvider } from 'naive-ui';
</script>

<template>
  <n-message-provider>
    <router-view></router-view>
  </n-message-provider>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
