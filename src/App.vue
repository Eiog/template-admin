<script setup lang="ts">
import {
  NMessageProvider,
  NConfigProvider,
  darkTheme,
  useOsTheme,
  GlobalThemeOverrides,
  NGlobalStyle,
} from "naive-ui";
import type { GlobalTheme } from "naive-ui";
import { watchEffect, ref } from "vue";
import { storeToRefs } from "pinia";
import { settingStore } from "./store";
const { theme } = storeToRefs(settingStore());
const osTheme = useOsTheme();
const nTheme = ref<GlobalTheme | null>(null);
const themeOverrides: GlobalThemeOverrides|any = ref({
  common: {
    primaryColor: "#FF0000",
  },
});
watchEffect(() => {
  if (theme.value.darkMode) {
    nTheme.value = darkTheme;
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  } else {
    nTheme.value = null;
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  }
});
watchEffect(() => {
  if (theme.value.autoMode) {
    if (osTheme.value === "dark") {
      nTheme.value = darkTheme;
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      nTheme.value = null;
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }
});
watchEffect(() => {
  themeOverrides.value.common.primaryColor = theme.value.primaryColor;
});
</script>

<template>
  <router-view v-slot="{ Component }">
    <n-config-provider
      :theme="nTheme"
      :theme-overrides="themeOverrides"
      abstract
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
