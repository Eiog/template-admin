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
import { themeStore } from "@/store/themeStore";
import { tabsStore } from "@/store/tabsStore";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const theme = themeStore();
const collapse = ref(false);
const fixedHeader = ref(true);
const fixedFooter = ref(false);
const tabsOnChange = function ({ index, item }) {
  router.push({ name: item.name });
};
const tabsOnClose = function({index}){
  tabsStore().removeTag(index)
  router.push({name:tabsStore().getTabItem.name})
}
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
          <Tabs
            :data="tabsStore().tabs"
            :current-index="tabsStore().activeIndex"
            @on-change="tabsOnChange"
            @on-close="tabsOnClose"
          ></Tabs>
        </div>
      </template>
      <template #aside>
        <aside class="aside">
          <div class="brand">
            <span v-if="!theme.asideCollapse">UnlitAdmin</span>
            <span v-if="theme.asideCollapse">U</span>
          </div>
          <Menu></Menu>
        </aside>
      </template>
      <template #footer>
        <div class="footer">footer</div>
      </template>
      <template #main>
        <div class="main rounded-16px shadow-light-50">
          <router-view v-slot="{ Component }">
            <transition name="fade-transform" mode="out-in">
              <keep-alive>
                <component :is="Component"></component>
              </keep-alive>
            </transition>
          </router-view>
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
  .brand {
    width: 100%;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
  }
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
  overflow: hidden;
  box-shadow: 0 0 5px rgba(202, 202, 202, 0.1);
}
.footer {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
}
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-transform-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
