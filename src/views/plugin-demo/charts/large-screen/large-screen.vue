<script setup lang="ts" name="LargeScreen">
import Layout from "./components/Layout.vue";
import { LayoutItem } from "./components";
const isFullScreen = ref(false);
const handleEdit = () => {};
const changeFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    isFullScreen.value = true;
  } else {
    document.exitFullscreen();
    isFullScreen.value = false;
  }
};
const handleFullScreen = () => {
  isFullScreen.value = !isFullScreen.value;
  changeFullScreen();
};
const list = ref<LayoutItem[]>([
  { x: 0, y: 0, w: 3, h: 1, i: "1" },
  { x: 3, y: 0, w: 6, h: 1, i: "2" },
  { x: 9, y: 0, w: 3, h: 1, i: "3" },
  { x: 0, y: 1, w: 3, h: 3, i: "4" },
  { x: 0, y: 4, w: 3, h: 4, i: "5" },
  { x: 3, y: 1, w: 6, h: 7, i: "6" },
  { x: 9, y: 1, w: 3, h: 7, i: "7" },
  { x: 0, y: 9, w: 12, h: 1, i: "8" },
]);
</script>
<template>
  <div class="w-full h-full rounded-xl overflow-hidden shadow">
    <teleport to="body" :disabled="!isFullScreen">
      <div
        class="relative w-full h-full bg-white z-999"
        dark="bg-dark-800"
        :class="isFullScreen ? '!fixed !inset-0' : ''"
      >
        <div
          class="absolute top-0 right-0 flex items-center bg-gray-300 rounded-bl-xl overflow-hidden opacity-30 transition-all z-10"
          dark="bg-dark-400"
          hover="opacity-100 "
        >
          <div
            class="pl-3 pr-2 py-1 cursor-pointer transition-colors"
            hover="bg-gray-200 dark:bg-dark-200"
          >
            <span>编辑</span>
          </div>
          <div
            class="pl-2 pr-3 py-1 cursor-pointer transition-colors"
            hover="bg-gray-200 dark:bg-dark-200"
            @click="handleFullScreen"
          >
            <span>全屏</span>
          </div>
        </div>
        <Layout :data="list" />
      </div>
    </teleport>
  </div>
</template>
<style scoped lang="less"></style>
