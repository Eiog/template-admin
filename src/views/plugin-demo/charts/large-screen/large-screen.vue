<script setup lang="ts" name="LargeScreen">
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
</script>
<template>
  <div class="w-full h-full rounded-xl overflow-hidden shadow">
    <teleport to="body" :disabled="!isFullScreen">
      <div
        class="relative w-full h-full bg-white z-999 "
        
        dark="bg-dark-800"
        :class="isFullScreen ? '!fixed !inset-0' : ''"
      >
        <div
          class="absolute top-0 right-0 flex items-center bg-gray-300 rounded-bl-xl overflow-hidden opacity-30 transition-all"
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
      </div>
    </teleport>
  </div>
</template>
<style scoped lang="less"></style>
