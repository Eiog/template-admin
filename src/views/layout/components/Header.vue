<script lang="ts">
export default {
  name: "Header",
};
</script>
<script setup lang="ts">
import { NTooltip, SelectOption } from "naive-ui";
import { useAppStore, useAuthStore, useThemeStore } from "@/store";
import { useRoute, useRouter } from "vue-router";
import { removeLocal } from "@/utils/";
import { nextTick, ref } from "vue";
import LineMdMenuFoldLeft from "~icons/line-md/menu-fold-left";
import LineMdMenuFoldRight from "~icons/line-md/menu-fold-right";
import LineMdGithubLoop from "~icons/line-md/github-loop";
const appStore = useAppStore();
const authStore = useAuthStore();
const themeStore = useThemeStore();
const route = useRoute();
const router = useRouter();

const dropdownOptions: SelectOption[] = [
  {
    label: "个人中心",
    value: "mine",
  },
  {
    label: "退出登录",
    value: "logout",
  },
];
const handleSelect = function (val) {
  if (val === "logout") {
    window.$dialog.warning({
      title: "确定退出吗",
      positiveText: "确定",
      negativeText: "取消",
      onPositiveClick: onLogOut,
      onNegativeClick: () => {
        return;
      },
    });
  }
};
const onLogOut = function () {
  authStore.$reset()
  window.$message.success("已退出");
  nextTick(() => {
    router.push("/login");
  });
};
const isFullScreen = ref(false);
const fullScreenOnClick = function () {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    isFullScreen.value = true;
  } else {
    document.exitFullscreen();
    isFullScreen.value = false;
  }
};
const collapsedOnClick = () => {
  appStore.sideCollapsed = !appStore.sideCollapsed;
};
const darkModeOnClick = () => {
  themeStore.darkMode = !themeStore.darkMode;
};
</script>
<template>
  <div class="h-full flex items-center">
    <div class="header-item" @click="collapsedOnClick">
      <LineMdMenuFoldLeft v-if="!appStore.sideCollapsed" />
      <LineMdMenuFoldRight v-if="appStore.sideCollapsed" />
    </div>
    <div class="mr-auto dark:!text-light-500">
      {{ route.path }}
    </div>
    <div class="header-item">
      <i class="ri-search-2-line text-2xl"></i>
    </div>
    <div class="header-item">
      <LineMdGithubLoop />
    </div>
    <div class="header-item" @click="fullScreenOnClick">
      <n-tooltip trigger="hover">
        <template #trigger>
          <i
            class="text-2xl"
            :class="
              isFullScreen
                ? 'ri-fullscreen-exit-fill'
                : 'ri-fullscreen-fill'
            "
          ></i>
        </template>
        全屏
      </n-tooltip>
    </div>
    <div
      class="header-item"
      @click="appStore.settingShow = !appStore.settingShow"
    >
      <n-tooltip trigger="hover">
        <template #trigger>
          <i class="ri-settings-4-fill text-2xl"></i>
        </template>
        设置
      </n-tooltip>
    </div>
    <div class="header-item" @click="darkModeOnClick">
      <i
        class="text-2xl"
        :class="themeStore.darkMode ? 'ri-moon-clear-fill' : 'ri-sun-fill'"
      ></i>
    </div>
    <div class="header-item hover:!bg-white dark:hover:!bg-black">
      <n-popselect
        trigger="click"
        @update:value="handleSelect"
        :options="dropdownOptions"
      >
        <div class="flex items-center justify-center gap-2">
          <n-avatar size="medium" round :src="authStore.user?.avatar">
          </n-avatar>
          <span>
            {{ authStore.user?.nickName }}
          </span>
        </div>
      </n-popselect>
    </div>
  </div>
</template>
<style scoped lang="less">
.header-item {
  @apply h-full flex items-center justify-center px-4 transition-colors duration-300 ease-in-out cursor-pointer text-xl text-dark-100 hover:bg-light-400 dark:text-light-500 dark:hover:bg-dark-50;
}
</style>
