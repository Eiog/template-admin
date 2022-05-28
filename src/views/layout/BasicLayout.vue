<script lang="ts">
export default {
  name: "",
};
</script>
<script setup lang="ts">
import { ref } from "vue";
import { NDrawer, NDrawerContent,NScrollbar } from "naive-ui";
import Layout from "./components/Layout.vue";
import Header from "./components/Header.vue";
import Tabs from "./components/Tabs.vue";
import Menu from "./components/Menu.vue";
import Main from "./components/Main.vue";
import Setting from "./components/Setting.vue";
import { themeStore } from "@/store/themeStore";
import { tabsStore } from "@/store/tabsStore";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const theme = themeStore();
const fixedHeader = ref(true);
const fixedFooter = ref(false);
const drawerShow = ref(false);
const tabsOnChange = function ({ index, item }) {
  router.push({ name: item.name });
};
const tabsOnClose = function ({ index }) {
  tabsStore().removeTag(index);
  router.push({ name: tabsStore().getTabItem.name });
};
const layoutMode = route.meta.layoutMode;
console.log();
</script>
<template>
  <div class="w-full h-full bg-light-300 dark:bg-dark-300">
    <Layout
      mode="vertical"
      :collapse="theme.asideCollapse"
      :fixed-header="fixedHeader"
      :fixed-footer="fixedFooter"
    >
      <template #header>
        <header
          class="w-full h-full bg-white dark:bg-dark-500 border-b-gray-200 dark:border-b-gray-400 border-b-1px"
        >
          <Header></Header>
        </header>
      </template>
      <template #tabs>
        <div class="w-full h-full bg-white dark:bg-dark-500 px-4 shadow-sm">
          <Tabs
            :data="tabsStore().tabs"
            :current-index="tabsStore().activeIndex"
            @on-change="tabsOnChange"
            @on-close="tabsOnClose"
          ></Tabs>
        </div>
      </template>
      <template #aside>
        <aside class="w-full h-full bg-white dark:bg-dark-900 shadow-sm">
          <div
            class="w-full h-56px flex items-center justify-center text-2xl cursor-default"
          >
            <span v-if="!theme.asideCollapse">UnlitAdmin</span>
            <span v-if="theme.asideCollapse">U</span>
          </div>
          <Menu></Menu>
        </aside>
      </template>
      <template #footer>
        <div
          class="w-full h-full bg-white dark:bg-dark-500 px-4 shadow-sm shadow-gray-200 flex items-center justify-center"
        >
          footer
        </div>
      </template>
      <template #main>
        <Main></Main>
      </template>
    </Layout>
    <div
      class="fixed top-1/4 right-10px w-40px h-40px bg-gray-400 rounded-md shadow-md flex items-center justify-center text-white text-2xl cursor-pointer transition-all ease-linear z-9999"
      :class="drawerShow ? '!right-310px' : ''"
      @click="drawerShow = !drawerShow"
    >
      <i class="transition-transform hover:rotate-90" :class="drawerShow ? 'ri-close-line' : 'ri-settings-3-line'"></i>
    </div>
    <n-drawer v-model:show="drawerShow" :auto-focus="false" display-directive="show" :width="310" placement="right">
      <n-drawer-content title="设置" :native-scrollbar="false">
        <Setting></Setting>
      </n-drawer-content>
    </n-drawer>
  </div>
</template>
<style scoped lang="less"></style>
