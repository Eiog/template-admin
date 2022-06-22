<script setup lang="ts" name="Tab">
import { onMounted, ref, watch,nextTick } from "vue";
import { useRoute, useRouter } from "vue-router";
import { NDropdown, NScrollbar, type ScrollbarInst } from "naive-ui";
import { useTabStore } from "@/store";
import TabItem from "./components/TabItem.vue";
import TabControl from "./components/TabControl.vue";
import autoAnimate from "@formkit/auto-animate";
import BetterScroll from "@/components/common/BetterScroll.vue";
import BScroll from "@better-scroll/core";
const tabStore = useTabStore();
const route = useRoute();
const router = useRouter();
const onChange = function (item) {
  router.push(item.path);
};
const onClose = function (item) {
  tabStore.removeTab(item);
  router.push(tabStore.activeTab.path as string);
};

const tabRef = ref<HTMLElement>();
const scrollRef = ref<ScrollbarInst>();
const tabWrapRef = ref<HTMLElement>();
const getBounding = function () {
  const currentTabElement = tabRef.value?.children[
    tabStore.authActiveIndex
  ] as Element;
  const { x: currentTabX, width: currentTabWidth } =
    currentTabElement.getBoundingClientRect();
  const scrollElement = tabWrapRef.value as Element;
  const { x: tabWrapX, width: tabWrapWidth } =
    scrollElement?.getBoundingClientRect();
  return {
    currentTabX,
    currentTabWidth,
    tabWrapX,
    tabWrapWidth,
    tabWrapRight: tabWrapX + tabWrapWidth,
  };
};
const scrollTab = function () {
  const { currentTabX, currentTabWidth, tabWrapX, tabWrapWidth, tabWrapRight } =
    getBounding();
    
    const maxs = BScrollRef.value?.instance.maxScrollX
    console.log(maxs); 
};
function initScrollTab() {
  watch(
    () => route.path,
    (newValue) => {
      nextTick(()=>{
        scrollTab();
      })
    }
  );
}
onMounted(() => {
  // autoAnimate(tabRef.value!);
  initScrollTab();
});
const scrollValue = ref(0);
const onScroll = function (data) {
  scrollValue.value = -data.x;
};
const BScrollRef = ref<Expose.BetterScroll>();
const ActiveTab = ref();
function onActive(data) {
  ActiveTab.value = data;
}
</script>
<template>
  <div class="w-full h-full flex items-center">
    <div class="flex-1 min-w-0 overflow-hidden" ref="tabWrapRef">
      <better-scroll scrollX ref="BScrollRef" @on-scroll="onScroll">
        <div class="flex items-center gap-3" ref="tabRef">
          <tab-item
            v-for="(item, index) in tabStore.authTab"
            :key="index"
            :data="item"
            :active="tabStore.authActiveIndex === index ? true : false"
            @on-change="onChange"
            @on-close="onClose"
            @on-active="onActive"
          />
        </div>
      </better-scroll>
    </div>
    <tab-control
      :refreshing="tabStore.refreshing"
      @on-refresh="tabStore.refresh()"
    />
  </div>
</template>
<style scoped lang="less"></style>
<style scoped></style>
