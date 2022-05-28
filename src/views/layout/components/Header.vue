<script lang="ts">
export default {
  name: "Header",
};
</script>
<script setup lang="ts">
import { NAvatar, NPopselect, NIcon, useMessage,NTooltip } from "naive-ui";
import { settingStore } from "@/store";
import { userStore } from "@/store/userStore";
import { useRoute, useRouter } from "vue-router";
import { removeStorage } from "@/utils/storage";
import { nextTick, ref } from "vue";
import { storeToRefs } from "pinia";

const message = useMessage();
const route = useRoute();
const router = useRouter();
const { theme,layout,Interface} = storeToRefs(settingStore())
const dropdownOptions = [
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
  if (val === "logout") onLogOut();
};
const onLogOut = function () {
  removeStorage("UNLIT-ADMIN-USER");
  removeStorage("UNLIT-TOKEN");
  message.success("已退出");
  nextTick(() => {
    router.push("/login");
  });
};
const isFullScreen = ref(false);
const fullScreen = function () {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    isFullScreen.value = true;
  } else {
    document.exitFullscreen();
    isFullScreen.value = false;
  }
};
</script>
<template>
  <div class="h-full flex items-center">
    <div
      class="header-item"
      @click="layout.collapsed = !layout.collapsed"
    >
      <i
        :class="
          layout.collapsed ? 'ri-menu-unfold-line' : 'ri-menu-fold-line'
        "
      ></i>
    </div>
    <div class="mr-auto dark:!text-light-500">
      {{ route.path }}
    </div>
    <div class="header-item">
      <i class="ri-search-2-line"></i>
    </div>
    <div class="header-item">
      <i class="ri-github-line"></i>
    </div>
    <div class="header-item" @click="fullScreen">
      <n-tooltip trigger="hover">
        <template #trigger>
          <i
            :class="
              isFullScreen ? 'ri-fullscreen-exit-line' : 'ri-fullscreen-line'
            "
          ></i>
        </template>
        全屏
      </n-tooltip>
    </div>
    <div class="header-item" @click="theme.darkMode = !theme.darkMode">
      <i :class="theme.darkMode? 'ri-moon-line' : 'ri-sun-line'"></i>
    </div>
    <div class="header-item hover:!bg-white dark:hover:!bg-black">
      <n-popselect
        trigger="click"
        @update:value="handleSelect"
        :options="dropdownOptions"
      >
        <n-avatar size="medium" round :src="userStore().user.avatar">
        </n-avatar>
      </n-popselect>
    </div>
  </div>
</template>
<style scoped lang="less">
.header-item {
  @apply h-full flex items-center justify-center px-4 transition-colors duration-300 ease-in-out cursor-pointer text-xl text-dark-100 hover:bg-light-400 dark:text-light-500 dark:hover:bg-dark-50;
}
</style>
