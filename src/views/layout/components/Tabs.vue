<script lang="ts">
export default {
  name: "Tabs",
};
</script>
<script setup lang="ts">
import { ref, watchEffect } from "vue";
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
</script>
<template>
  <div
    class="w-full h-full flex items-center gap-2 overflow-y-hidden overflow-x-auto"
  >
    <div
      class="bg-light-500 rounded-1 flex items-center justify-center transition-colors duration-300 ease-in-out gap-1 cursor-pointer px-2  hover:bg-gray-300"
      v-for="(item, index) in (data as any)"
      :key="index"
      :class="tabsIndex === index ? '!bg-gray-300' : ''"
    >
      <div class="h-full flex items-center justify-center gap-1 py-1" @click="onChange(item, index)">
        <i class="leading-tight" v-if="item.icon" :class="item.icon"></i>
        <span class="text-sm">{{ item.title }}</span>
      </div>
      <span
        class="bg-gray-100 w-16px h-16px flex items-center justify-center rounded-full transition-colors hover:bg-light-50"
        v-if="!item.rootTab"
        @click="onClose(item, index)"
      >
        <i
          class="ri-close-line leading-none transition-transform ease-in-out hover:rotate-180"
        ></i>
      </span>
    </div>
  </div>
</template>
<style scoped lang="less"></style>
<style scoped></style>
