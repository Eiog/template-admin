<script setup lang="ts" name="TabControl">
import { watch,ref } from "vue";
import { NDropdown } from "naive-ui";
type Props = {
  refreshing: boolean;
};
type Emit = {
  (e: "onRefresh"): void;
};
const props = defineProps<Props>();
const emit = defineEmits<Emit>();
const options = [
  { label: "关闭全部", key: "close-all" },
  { label: "关闭左侧", key: "close-left" },
  { label: "关闭右侧", key: "close-right" },
];
const handleSelect = (key) => {};
const isRefreshing = ref(false)
function onRefresh(){
    emit('onRefresh')
    isRefreshing.value = true
    setTimeout(() => {
        isRefreshing.value = false
    }, 1000);
}
</script>
<template>
  <div class="h-full flex bg-light-100" dark="bg-dark-500">
    <div
      class="px-3 flex items-center justify-center text-xl cursor-pointer"
      hover="bg-gray-100"
      dark="hover:bg-dark-200"
      @click="onRefresh"
    >
      <i
        class="ri-refresh-line"
        :class="isRefreshing ||isRefreshing ? 'animate-rotate-in' : ''"
      ></i>
    </div>
    <n-dropdown trigger="click" :options="options" @select="handleSelect">
      <div
        class="px-3 flex items-center justify-center text-xl cursor-pointer"
        hover="bg-gray-100"
        dark="hover:bg-dark-200"
      >
        <i class="ri-menu-line"></i>
      </div>
    </n-dropdown>
  </div>
</template>
<style scoped lang="less"></style>
