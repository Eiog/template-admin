<script setup lang="ts">
import {
  NMessageProvider,
  NConfigProvider,
  NGlobalStyle,
} from "naive-ui";
import { storeToRefs } from "pinia";
import { useThemeStore } from "./store";
import { subscribeStore } from "@/store";
const themeStore = useThemeStore();
const { naiveThemeOverrides, naiveThemeMode } = storeToRefs(themeStore);
subscribeStore();
</script>

<template>
  <router-view v-slot="{ Component }">
    <n-config-provider
      class="h-full"
      :theme="naiveThemeMode"
      :theme-overrides="naiveThemeOverrides"
    >
      <n-message-provider>
        <transition name="fade-transform" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </n-message-provider>
      <n-global-style />
    </n-config-provider>
  </router-view>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}

.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-transform-enter-from {
  opacity: 0;
}

.fade-transform-leave-to {
  opacity: 0;
}
</style>
