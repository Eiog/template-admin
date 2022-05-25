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
import {themeStore} from '@/store/themeStore'
const theme = themeStore()
const collapse = ref(false);
const fixedHeader = ref(true);
const fixedFooter = ref(false);
const tabsData = ref([
  {
    title: "标签1",
    name: "biaoqian1",
    path: "/biaoqian1",
  },
  {
    title: "标签2",
    name: "biaoqian2",
    path: "/biaoqian2",
  },
  {
    title: "标签3",
    name: "biaoqian3",
    path: "/biaoqian3",
  },
  {
    title: "标签4",
    name: "biaoqian4",
    path: "/biaoqian4",
  },
  {
    title: "标签5",
    name: "biaoqian5",
    path: "/biaoqian5",
  },
]);
</script>
<template>
  <div class="content">
    <Layout
      mode="vertical"
      :collapse="theme.asideCollapse"
      :fixed-header="fixedHeader"
      :fixed-footer="fixedFooter"
    >
      <template #header>
        <header class="header">
          <Header></Header>
        </header>
      </template>
      <template #tabs>
        <div class="tabs">
          <Tabs :data="tabsData" :current-index="1"></Tabs>
        </div>
      </template>
      <template #aside>
        <aside class="aside">
          <Menu></Menu>
        </aside>
      </template>
      <template #footer> 
        <div class="footer">
          footer
        </div>
        </template>
      <template #main>
        <div class="main">
          <router-view></router-view>
        </div>
      </template>
    </Layout>
  </div>
</template>
<style scoped lang="less">
.content {
  background: rgba(203, 181, 255, 0.1);
  width: 100%;
  height: 100%;
}
.header {
  width: 100%;
  height: 100%;
  background: #fff;
  border-bottom: 1px solid rgba(94, 94, 94, 0.1);
}
.aside {
  width: 100%;
  height: 100%;
  background: rgb(255, 255, 255);
  box-shadow: 3px 0 5px rgba(94, 94, 94, 0.1);
}
.tabs {
  width: 100%;
  height: 100%;
  padding: 0 10px;
  background: #fff;
  box-shadow: 0 2px 5px rgba(94, 94, 94, 0.1);
}
.main {
  height: 100%;
  border-radius: 20px;
  background: #fff;
  padding: 20px;
  box-shadow: 0 0 5px rgba(202, 202, 202, 0.1);
}
.footer{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
}
</style>
