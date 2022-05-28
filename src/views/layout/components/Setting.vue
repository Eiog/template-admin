<script lang="ts">
export default {
  name: "",
};
</script>
<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { settingStore } from "@/store";
import {
  NDivider,
  NSwitch,
  NColorPicker,
  NButton,
  NInputNumber,
} from "naive-ui";
const { theme, layout, Interface } = storeToRefs(settingStore());
const primaryColor = ref("");
const primaryColorList = [
  { name: "朱砂", color: "#ff461f" },
  { name: "火红", color: "#ff2d51" },
  { name: "鹅黄", color: "#fff143" },
  { name: "蔚蓝", color: "#70f3ff" },
  { name: "石青", color: "#1685a9" },
  { name: "靛蓝", color: "#065279" },
  { name: "品红", color: "#f00056" },
  { name: "宝蓝", color: "#4b5cc4" },
  { name: "蓝灰色", color: "#a1afc9" },
  { name: "青葱", color: "#0aa344" },
  { name: "黛紫", color: "#574266" },
  { name: "乌色", color: "#725e82" },
  { name: "玄青", color: "#3d3b4f" },
  { name: "丁香色", color: "#cca4e3" },
  { name: "鸦青", color: "#424c50" },
  { name: "藕色", color: "#edd1d8" },
];
const primaryColorIndex = ref(0);
const primaryColorOnChange = function ({ item, index }) {
  primaryColorIndex.value = index;
  theme.value.primaryColor = item.color;
};
</script>
<template>
  <div>
    <n-divider>主题模式</n-divider>
    <div class="flex flex-col gap-3">
      <div class="flex justify-items-center justify-between">
        <span>深色主题</span>
        <n-switch v-model:value="theme.darkMode" size="medium" @update:value="">
          <template #icon>
            <i :class="theme.darkMode ? 'ri-moon-line' : 'ri-sun-line'"></i>
          </template>
        </n-switch>
      </div>
      <div class="flex justify-items-center justify-between">
        <span>跟随系统</span>
        <n-switch v-model:value="theme.autoMode" size="medium" @update:value="">
          <template #icon>
            <i
              :class="theme.autoMode ? 'ri-close-circle-line' : 'ri-sun-line'"
            ></i>
          </template>
        </n-switch>
      </div>
    </div>
    <n-divider>布局模式</n-divider>
    <n-divider>主题颜色</n-divider>
    <div class="flex flex-wrap gap-3 justify-between">
      <div
        class="w-20px h-20px rounded-1 bg-gray-600 cursor-pointer flex items-center justify-center"
        v-for="(item, index) in primaryColorList"
        :key="index"
        :style="{ background: item.color }"
        @click="primaryColorOnChange({ item, index })"
      >
        <i
          class="ri-check-line text-white text-lg"
          v-if="index === primaryColorIndex"
        ></i>
      </div>
    </div>
    <div class="mt-3">
      <n-color-picker v-model:value="theme.primaryColor" :show-preview="true" />
    </div>
    <div class="mt-2">
      <n-button size="small" block @click="">更多颜色</n-button>
    </div>
    <n-divider>界面功能</n-divider>
    <div class="flex flex-col gap-2">
      <span class="text-xs text-gray-400">头部</span>
      <div class="flex items-center justify-between h-28px">
        <span>头部反转色</span>
        <n-switch
          v-model:value="layout.headerInverted"
          size="medium"
          @update:value=""
        />
      </div>
      <div class="flex items-center justify-between h-28px">
        <span>头部固定</span>
        <n-switch
          v-model:value="layout.headerFixed"
          size="medium"
          @update:value=""
        />
      </div>
      <div class="flex items-center justify-between">
        <span>头部高度</span>
        <n-input-number
          v-model:value="layout.headerHeight"
          placeholder=""
          size="small"
          style="width: 100px"
        />
      </div>
    </div>
    <div class="flex flex-col gap-2 mt-5">
      <span class="text-xs text-gray-400">标签页</span>
      <div class="flex items-center justify-between h-28px">
        <span>显示标签页</span>
        <n-switch
          v-model:value="layout.hasTabs"
          size="medium"
          @update:value=""
        />
      </div>
      <div class="flex items-center justify-between">
        <span>标签页高度</span>
        <n-input-number
          v-model:value="layout.tabsHeight"
          placeholder=""
          size="small"
          style="width: 100px"
        />
      </div>
    </div>
    <div class="flex flex-col gap-2 mt-5">
      <span class="text-xs text-gray-400">侧边栏</span>
      <div class="flex items-center justify-between h-28px">
        <span>侧边栏反转色</span>
        <n-switch
          v-model:value="layout.sideInverted"
          size="medium"
          @update:value=""
        />
      </div>
      <div class="flex items-center justify-between h-28px">
        <span>侧边栏固定</span>
        <n-switch
          v-model:value="layout.sideFixed"
          size="medium"
          @update:value=""
        />
      </div>
      <div class="flex items-center justify-between">
        <span>侧边栏展开宽度</span>
        <n-input-number
          v-model:value="layout.sideWidth"
          placeholder=""
          size="small"
          style="width: 100px"
        />
      </div>
      <div class="flex items-center justify-between">
        <span>侧边栏收起宽度</span>
        <n-input-number
          v-model:value="layout.sideCollapsedWidth"
          placeholder=""
          size="small"
          style="width: 100px"
        />
      </div>
    </div>

    <n-divider>界面显示</n-divider>
    <n-divider>主题配置</n-divider>
  </div>
</template>
<style scoped lang="less"></style>
