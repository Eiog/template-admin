<script lang="ts">
export default {
  name: "Header",
};
</script>
<script setup lang="ts">
import { NAvatar, NPopselect, NIcon, useMessage } from "naive-ui";
import { themeStore } from "@/store/themeStore";
import { userStore } from "@/store/userStore";
import { useRoute, useRouter } from "vue-router";
import { removeStorage } from "@/utils/storage";
import { nextTick } from "vue";

const message = useMessage();
const route = useRoute();
const router = useRouter();
const theme = themeStore();
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
const changeTheme = function () {
  if (theme.mode === "light") return (theme.mode = "dark");
  if (theme.mode === "dark") return (theme.mode = "light");
  theme.mode = "light";
};
</script>
<template>
  <div class="h-full flex items-center">
    <div
      class="header-item"
      @click="theme.asideCollapse = !theme.asideCollapse"
    >
      <i
        :class="
          theme.asideCollapse ? 'ri-menu-unfold-line' : 'ri-menu-fold-line'
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
    <div class="header-item">
      <i class="ri-fullscreen-line"></i>
    </div>
    <div class="header-item" @click="changeTheme">
      <i :class="theme.mode==='light'?'ri-sun-line':'ri-moon-line'"></i>
    </div>
    <div class="header-item hover:!bg-white dark:hover:!bg-black">
      <n-popselect
        trigger="click"
        @update:value="handleSelect"
        :options="dropdownOptions"
      >
        <n-avatar size="medium" round :src="userStore().user.avatar">
          <!-- <n-icon size="20">
            <i class="ri-user-smile-line"></i>
          </n-icon> -->
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
