<script lang="ts">
export default {
  name: "Main",
};
</script>
<script setup lang="ts">

import { useRouteStore, useTabStore } from "@/store";
const routeStore = useRouteStore();
const tabStore = useTabStore();
</script>
<template>
    <main class="w-full h-full">
      <router-view v-slot="{ Component }">
        <transition name="fade-transform" mode="out-in">
          <keep-alive
            :include="routeStore.include"
            :exclude="routeStore.excludes"
          >
            <component
              :is="!tabStore.refreshing ? Component : undefined"
            ></component>
          </keep-alive>
        </transition>
      </router-view>
    </main>
</template>
<style scoped lang="less">
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.3s ease-in-out;
}

.fade-transform-enter-from {
  opacity: 0;
  transform: translateX(-10px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
</style>
