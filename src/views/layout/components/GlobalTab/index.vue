<script setup lang="ts" name="Tab">
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { NDropdown, NScrollbar, type ScrollbarInst } from "naive-ui";
import { useTabStore } from "@/store";
import TabItem from "./components/TabItem.vue";
import TabControl from "./components/TabControl.vue";
import autoAnimate from "@formkit/auto-animate"
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
  const tabElement = tabRef.value as Element;
  const { x: tabX, width: tabWidth } = tabElement?.getBoundingClientRect();

  const currentTabElement = tabRef.value?.children[
    tabStore.authActiveIndex
  ] as Element;
  const { x: currentTabX, width: currentTabWidth } =
    currentTabElement.getBoundingClientRect();

  const scrollElement = tabWrapRef.value as Element;
  const { x: tabWrapX, width: tabWrapWidth } =
    scrollElement?.getBoundingClientRect();
  return {
    tabX,
    tabWidth,
    tabRight: tabX + tabWidth,
    currentTabX,
    currentTabWidth,
    tabWrapX,
    tabWrapWidth,
    tabWrapRight: tabWrapX + tabWrapWidth,
  };
};
const scrollTab = function () {
  const {
    tabX,
    tabWidth,
    tabRight,
    currentTabX,
    currentTabWidth,
    tabWrapX,
    tabWrapWidth,
    tabWrapRight,
  } = getBounding();
  const scrollRight = currentTabX + currentTabWidth * 2 - tabWrapRight;
  if (scrollRight > 1) {
    scrollRef.value?.scrollTo({ left: scrollRight + scrollValue.value });
  }
  const scrollLeft = tabWrapX - currentTabX + currentTabWidth;
  if (scrollLeft > 1) {
    scrollRef.value?.scrollTo({ left: scrollValue.value - scrollLeft });
  }
};
onMounted(() => {
  watch(
    () => route.path,
    (value) => {
      scrollTab();
    },
    { immediate: true }
  );
  autoAnimate(tabRef.value!)
});
const scrollValue = ref(0);
const onScroll = function (e) {
  scrollValue.value = e.target.scrollLeft;
};
</script>
<template>
  <div class="w-full h-full flex items-center">
    <div class="flex-1 min-w-0" ref="tabWrapRef">
      <n-scrollbar x-scrollable ref="scrollRef" @scroll="onScroll">
        <div
          class="h-full p-t-3 pb-3 flex w-max gap-2 items-center"
          ref="tabRef"
        >
          <tab-item
            v-for="(item, index) in tabStore.authTab"
            :key="index"
            :data="item"
            :active="tabStore.authActiveIndex === index ? true : false"
            @on-change="onChange"
            @on-close="onClose"
          />
        </div>
      </n-scrollbar>
    </div>
    <tab-control :refreshing="tabStore.refreshing" @on-refresh="tabStore.refresh()" />
  </div>
</template>
<style scoped lang="less"></style>
<style scoped></style>
