<script lang="ts">
export default {
  name: "",
};
</script>
<script setup lang="ts">
import { ref } from "vue";
import { NDrawer, NDrawerContent, NScrollbar } from "naive-ui";
import Layout from "./components/Layout.vue";
import Header from "./components/Header.vue";
import Tab from "./components/Tab.vue";
import Menu from "./components/Menu.vue";
import Main from "./components/Main.vue";
import Setting from "./components/Setting.vue";
import { useAppStore,useThemeStore,useTabStore,useRouteStore } from "@/store";
import { useRoute, useRouter } from "vue-router";
import { storeToRefs } from "pinia";
const appStore = useAppStore()
const themeStore = useThemeStore()
const tabStore = useTabStore()
const routeStore = useRouteStore()
const { themeColor,layout,header,side,tabs,footer} = storeToRefs(themeStore);
const route = useRoute();
const router = useRouter();
const tabsOnChange = function ({ index, item }) {
  router.push({ name: item.name });
};
const tabsOnClose = function ({ index }) {
  tabStore.removeTag(index);
  router.push({ name: tabStore.activeTab.name as any });
}; 
const layoutMode = route.meta.layoutMode;
console.log();
</script>
<template>
  <div class="w-full h-full">
    <Layout
      :mode="layout.mode"
      :collapsed="appStore.sideCollapsed"
      :fixed-header="header.fixed"
      :fixed-footer="footer.fixed"
      :sider-width="side.width"
      :sider-collapse-width="side.collapsedWidth"
      :header-height="header.height"
      :tabs-height="tabs.height"
      :footer-height="footer.height"
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
          <Tab
            @on-change="tabsOnChange"
            @on-close="tabsOnClose"
            @on-refresh="tabStore.refresh"
          ></Tab>
        </div>
      </template>
      <template #aside>
        <aside class="w-full h-full bg-white dark:bg-dark-900 shadow-sm">
          <div
            class="w-full h-56px flex items-center justify-center text-2xl cursor-default"
          >
            <span v-if="!appStore.sideCollapsed">UnlitAdmin</span>
            <span v-if="appStore.sideCollapsed">U</span>
          </div>
          <Menu
            :collapsed="appStore.sideCollapsed"
            :collapsed-width="side.collapsedWidth"
            :inverted="side.inverted"
          ></Menu>
        </aside>
      </template>
      <template #footer>
        <div
          class="w-full h-full bg-white dark:bg-dark-500 px-4 shadow-md shadow-dark-500 flex items-center justify-center"
        >
          footer
        </div>
      </template>
      <template #main>
        <Main></Main>
      </template>
    </Layout>
    <div
      class="fixed top-1/4 right-10px w-40px h-40px rounded-md shadow-md flex items-center justify-center text-white text-2xl cursor-pointer transition-all ease-linear z-9999"
      :class="appStore.settingShow ? '!right-310px' : ''"
      :style="{background:themeColor}"
      @click="appStore.settingShow = !appStore.settingShow"
    >
      <i
        class="transition-transform hover:rotate-90"
        :class="appStore.settingShow ? 'ri-close-line' : 'ri-settings-3-line'"
      ></i>
    </div>
    <n-drawer
      v-model:show="appStore.settingShow"
      :auto-focus="false"
      display-directive="show"
      :width="310"
      placement="right"
    >
      <n-drawer-content title="主题设置" :native-scrollbar="false">
        <Setting></Setting>
      </n-drawer-content>
    </n-drawer>
  </div>
</template>
<style scoped lang="less"></style>
