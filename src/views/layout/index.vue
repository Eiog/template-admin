<script lang="ts">
export default {
  name: "",
};
</script>
<script setup lang="ts">
import { ref } from "vue";
import Layout from "./components/Layout.vue";
import Tabs from "./components/Tabs.vue";
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
  <Layout
    mode="vertical"
    :collapse="collapse"
    :fixed-header="fixedHeader"
    :fixed-footer="fixedFooter"
  >
    <template #header>
      <header class="header">header</header>
    </template>
    <template #tabs>
      <div class="tabs">
        <Tabs :data="tabsData" :current-index="1"></Tabs>
      </div>
    </template>
    <template #aside>
      <aside class="aside"></aside>
    </template>
    <template #footer> footer </template>
    <template #main>
      <p v-for="(item, index) in 100" :key="index">{{ index }}</p>
    </template>
  </Layout>
</template>
<style scoped lang="less">
.header {
  width: 100%;
  height: 100%;
  background: #ddd;
}
.aside {
  width: 100%;
  height: 100%;
  background: rgb(36, 36, 36);
}
.tabs {
  width: 100%;
  height: 100%;
  padding: 0 10px;
}
</style>
