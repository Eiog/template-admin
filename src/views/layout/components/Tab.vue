<script lang="ts">
export default {
  name: "Tabs",
};
</script>
<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { NDropdown } from "naive-ui";
const props = defineProps({
  mode: {
    type: String,
    default: "",
  },
  data: {
    type: Array,
    default: [],
  },
  currentIndex: {
    type: Number,
    default: 0,
  },
});
const emit = defineEmits(["onChange", "onClose"]);
const onChange = function (item, index) {
  tabsIndex.value = index;
  emit("onChange", { item, index });
};
const onClose = function (item, index) {
  emit("onClose", { item, index });
};
const tabsIndex = ref(0);
watchEffect(() => {
  tabsIndex.value = props.currentIndex;
});
const options = [
  {label:'关闭全部',key:'close-all'},
  {label:'关闭左侧',key:'close-left'},
  {label:'关闭右侧',key:'close-right'},
]
const handleSelect = (key)=>{
  
  
}
</script>
<template>
  <div class="w-full h-full flex">
    <div
      class="w-full h-full flex-1 flex items-center gap-2 overflow-y-hidden overflow-x-auto"
    >
      <div
        class="bg-light-500 rounded-1 flex items-center justify-center transition-colors duration-300 ease-in-out gap-1 cursor-pointer px-2 hover:bg-gray-300 dark:bg-dark-200 dark:hover:bg-dark-50"
        v-for="(item, index) in (data as any)"
        :key="index"
        :class="tabsIndex === index ? 'active' : ''"
      >
        <div
          class="h-full flex items-center justify-center gap-1 py-1"
          @click="onChange(item, index)"
        >
          <i class="leading-tight" v-if="item.icon" :class="item.icon"></i>
          <span class="text-sm">{{ item.title }}</span>
        </div>
        <span
          class="bg-gray-100 dark:bg-dark-50 w-16px h-16px flex items-center justify-center rounded-full transition-colors hover:bg-light-50 dark:hover:bg-dark-500"
          v-if="!item.rootTab"
          @click="onClose(item, index)"
        >
          <i
            class="ri-close-line leading-none transition-transform ease-in-out hover:rotate-180"
          ></i>
        </span>
      </div>
    </div>
    <div class="h-full flex">
      <div class="px-3 flex items-center justify-center text-xl cursor-pointer hover:bg-gray-100">
        <i class="ri-refresh-line"></i>
      </div>
      <n-dropdown trigger="click" :options="options" @select="handleSelect">
      <div class="px-3 flex items-center justify-center text-xl cursor-pointer hover:bg-gray-100">
        <i class="ri-menu-line"></i>
      </div>
    </n-dropdown>
    </div>
  </div>
</template>
<style scoped lang="less"></style>
<style scoped>
.active {
  @apply bg-gray-300 dark:bg-dark-50;
}
</style>
