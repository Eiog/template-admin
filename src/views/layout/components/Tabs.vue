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
const onChange = function (e, item, index) {
  if (e.target.className === "close" || e.target.className === "ri-close-line")
    return;
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
  <div class="tabs-wrap">
    <div
      class="tabs-item"
      v-for="(item,index) in (data as any)"
      :key="index"
      :class="tabsIndex === index ? 'active' : ''"
      @click="onChange($event, item, index)"
    >
      <i v-if="item.icon" :class="item.icon"></i>
      <span class="text">{{ item.title }}</span>
      <span class="close" @click="onClose(item, index)">
        <i class="ri-close-line"></i>
      </span>
    </div>
  </div>
</template>
<style scoped lang="less">
.tabs-wrap {
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  overflow-x: auto;
  display: flex;
  align-items: center;
  gap: 5px;
  .tabs-item {
    padding: 4px 8px;
    background: rgb(233, 233, 233);
    border-radius: 6px;
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 4px;
    transition: all .3s;
    .text {
      white-space: nowrap;
      cursor: pointer;
    }
    .close {
      width: 14px;
      height: 14px;
      border-radius: 100%;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all .3s;
    }
    .close:hover{
      background: rgb(238, 238, 238);
      transform: rotate(90deg);
    }
  }
  .tabs-item.active,.tabs-item:hover {
    background: rgb(199, 199, 199);
  }
}
</style>
