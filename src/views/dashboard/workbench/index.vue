<script lang="ts">
export default {
  name: "workbench",
};
</script>
<script setup lang="ts">
import UserPanel from './components/UserPanel.vue';
import Content from './components/Content.vue';
</script>
<template>
  <div>
    <user-panel></user-panel>
    <content></content>
  </div>
</template>
<style scoped lang="less"></style>
