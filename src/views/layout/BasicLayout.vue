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
import {GlobalTab} from "./components";
import Menu from "./components/Menu.vue";
import Main from "./components/Main.vue";
import Setting from "./components/Setting.vue";
import { useAppStore,useThemeStore } from "@/store";
import { storeToRefs } from "pinia";
const appStore = useAppStore()
const themeStore = useThemeStore()
const { themeColor,layout,header,side,tab,footer} = storeToRefs(themeStore);
console.log();
</script>
<template>
  <div class="w-full h-full">
    <Layout
      :mode="layout.mode"
      :collapsed="appStore.sideCollapsed"

      :sider-width="side.width"
      :sider-collapse-width="side.collapsedWidth"
      :sider-show="side.show"
      
      :header-height="header.height"
      :header-fixed="header.fixed"
      :header-show="header.show"

      :tab-height="tab.height"
      :tab-show="tab.show"

      :footer-height="footer.height"
      :footer-fixed="footer.fixed"
      :footer-show="footer.show"
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
          <global-tab></global-tab>
        </div>
      </template>
      <template #aside>
        <aside class="w-full h-full bg-white dark:bg-dark-900 shadow-sm">
          <n-scrollbar>
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
          </n-scrollbar>
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
