<script lang="ts">
export default {
  name: "",
};
</script>
<script setup lang="ts">
import { ref } from "vue";
import Layout from "./components/Layout.vue";
import Header from "./components/Header.vue";
import Tabs from "./components/Tabs.vue";
import Menu from "./components/Menu.vue";
import Main from './components/Main.vue'
import { themeStore } from "@/store/themeStore";
import { tabsStore } from "@/store/tabsStore";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const theme = themeStore();
const collapse = ref(false);
const fixedHeader = ref(true);
const fixedFooter = ref(false);
const tabsOnChange = function ({ index, item }) {
  router.push({ name: item.name });
};
const tabsOnClose = function ({ index }) {
  tabsStore().removeTag(index);
  router.push({ name: tabsStore().getTabItem.name });
};
const layoutMode = route.meta.layoutMode
console.log();
</script>
<template>
  <div class="w-full h-full bg-light-300">
    <Layout
      mode="vertical"
      :collapse="theme.asideCollapse"
      :fixed-header="fixedHeader"
      :fixed-footer="fixedFooter"
    >
      <template #header>
        <header class="w-full h-full bg-white border-b-gray-200 border-b-1px">
          <Header></Header>
        </header>
      </template>
      <template #tabs>
        <div class="w-full h-full bg-white px-4 shadow-sm">
          <Tabs
            :data="tabsStore().tabs"
            :current-index="tabsStore().activeIndex"
            @on-change="tabsOnChange"
            @on-close="tabsOnClose"
          ></Tabs>
        </div>
      </template>
      <template #aside>
        <aside class="w-full h-full bg-white shadow-sm">
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
          class="w-full h-full bg-white px-4 shadow-sm shadow-gray-200 flex items-center justify-center"
        >
          footer
        </div>
      </template>
      <template #main>
        <div
          class="w-full h-full bg-white rounded-16px shadow-sm shadow-gray-200 p-20px overflow-hidden"
        >
          <Main></Main>
        </div>
      </template>
    </Layout>
    <!-- <template>
    <BlankLayout>
      <router-view v-slot="{ Component }">
        <transition name="fade-transform" mode="out-in">
          <keep-alive>
            <component :is="Component"></component>
          </keep-alive>
        </transition>
      </router-view>
    </BlankLayout>
    </template> -->
  </div>
</template>
<style scoped lang="less">

</style>
