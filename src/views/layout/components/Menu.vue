<script lang="ts">
export default {
  name: "Menu",
};
</script>
<script setup lang="ts">
import { ref,watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import { NMenu } from "naive-ui";
import type { MenuOption } from "naive-ui";
import asyncRoutes from "@/router/route.async";
import { routerToMenu } from "@/utils/formatRouter";
import { themeStore } from "@/store/themeStore";
const theme = themeStore();
const route = useRoute();
const router = useRouter();
const activeKey = ref();
watchEffect(()=>{
    activeKey.value = route.name
})
const menuOptions = routerToMenu(asyncRoutes);
const menuOnChange = function (key: string, item: MenuOption): void {
  router.push({
    name: key,
  });
};
</script>
<template>
  <aside>
    <n-menu
      :options="menuOptions"
      :collapsed="theme.asideCollapse"
      :collapsed-width="64"
      :indent="20"
      v-model:value="(activeKey as string)"
      @update:value="menuOnChange"
    />
  </aside>
</template>
<style scoped lang="less"></style>
