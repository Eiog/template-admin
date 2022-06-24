<script setup lang="ts" name="GlobalSetting">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useThemeStore } from "@/store";
import {
  NDivider,
  NSwitch,
  NColorPicker,
  NButton,
  NInputNumber,
} from "naive-ui";
const themeStore = useThemeStore();
const {
  darkMode,
  autoMode,
  themeColor,
  themeColorList,
  layout,
  header,
  tab,
  main,
  side,
  footer,
} = storeToRefs(themeStore);
const primaryColorIndex = ref(0);
const primaryColorOnChange = function ({ item, index }) {
  primaryColorIndex.value = index;
  themeColor.value = item.color;
};
</script>
<template>
  <div>
    <n-divider>主题模式</n-divider>
    <div class="flex flex-col gap-3">
      <div class="flex justify-items-center justify-between">
        <span>深色主题</span>
        <n-switch v-model:value="darkMode" size="medium" @update:value="">
          <template #icon>
            <i :class="darkMode ? 'ri-moon-line' : 'ri-sun-line'"></i>
          </template>
        </n-switch>
      </div>
      <div class="flex justify-items-center justify-between">
        <span>跟随系统</span>
        <n-switch
          v-model:value="autoMode"
          size="medium"
          @update:value="themeStore.followSysMode"
        >
          <template #icon>
            <i :class="autoMode ? 'ri-close-circle-line' : 'ri-sun-line'"></i>
          </template>
        </n-switch>
      </div>
    </div>
    <n-divider>布局模式</n-divider>
    <n-divider>主题颜色</n-divider>
    <div class="flex flex-wrap gap-3 justify-between">
      <div
        class="w-20px h-20px rounded-1 bg-gray-600 cursor-pointer flex items-center justify-center"
        v-for="(item, index) in themeColorList"
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
      <n-color-picker v-model:value="themeColor" :show-preview="true" />
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
          v-model:value="header.inverted"
          size="medium"
          @update:value=""
          :disabled="!darkMode"
        />
      </div>
      <div class="flex items-center justify-between h-28px">
        <span>头部固定</span>
        <n-switch v-model:value="header.fixed" size="medium" @update:value="" />
      </div>
      <div class="flex items-center justify-between">
        <span>头部高度</span>
        <n-input-number
          v-model:value="header.height"
          placeholder=""
          size="small"
          style="width: 100px"
          :step="2"
          :min="40"
          :max="80"
        />
      </div>
    </div>
    <div class="flex flex-col gap-2 mt-5">
      <span class="text-xs text-gray-400">标签页</span>
      <div class="flex items-center justify-between h-28px">
        <span>显示标签页</span>
        <n-switch v-model:value="tab.hide" size="medium" @update:value="" />
      </div>
      <div class="flex items-center justify-between">
        <span>标签页高度</span>
        <n-input-number
          v-model:value="tab.height"
          placeholder=""
          size="small"
          style="width: 100px"
          :step="2"
          :min="36"
          :max="50"
        />
      </div>
    </div>
    <div class="flex flex-col gap-2 mt-5">
      <span class="text-xs text-gray-400">侧边栏</span>
      <div class="flex items-center justify-between h-28px">
        <span>侧边栏反转色</span>
        <n-switch
          v-model:value="side.inverted"
          size="medium"
          @update:value=""
          :disabled="!darkMode"
        />
      </div>
      <div class="flex items-center justify-between h-28px">
        <span>侧边栏固定</span>
        <n-switch v-model:value="side.fixed" size="medium" @update:value="" />
      </div>
      <div class="flex items-center justify-between">
        <span>侧边栏展开宽度</span>
        <n-input-number
          v-model:value="side.width"
          placeholder=""
          size="small"
          style="width: 100px"
          :step="10"
          :min="160"
          :max="300"
        />
      </div>
      <div class="flex items-center justify-between">
        <span>侧边栏收起宽度</span>
        <n-input-number
          v-model:value="side.collapsedWidth"
          placeholder=""
          size="small"
          style="width: 100px"
          :step="2"
          :min="64"
          :max="80"
        />
      </div>
    </div>
    <div class="flex flex-col gap-2 mt-5">
      <span class="text-xs text-gray-400">底部</span>
      <div class="flex items-center justify-between h-28px">
        <span>底部固定</span>
        <n-switch v-model:value="footer.fixed" size="medium" @update:value="" />
      </div>
      <div class="flex items-center justify-between h-28px">
        <span>显示底栏</span>
        <n-switch v-model:value="footer.show" size="medium" @update:value="" />
      </div>
    </div>

    <n-divider>界面显示</n-divider>
    <n-divider>主题配置</n-divider>
    <div class="flex gap-3">
      <div class="flex-1">
        <n-button type="primary" size="medium" block @click="">导出</n-button>
      </div>
      <div class="flex-1">
        <n-button size="medium" block @click="themeStore.resetTheme"
          >重置</n-button
        >
      </div>
    </div>
  </div>
</template>
<style scoped lang="less"></style>
