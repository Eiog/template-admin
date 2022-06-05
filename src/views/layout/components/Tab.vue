<script lang="ts">
export default {
  name: "Tabs",
};
</script>
<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { NDropdown, NScrollbar,type ScrollbarInst } from "naive-ui";
import { useElementBounding, useActiveElement,useElementSize,useDebounceFn  } from "@vueuse/core";
import { useTabStore } from "@/store";
const tabStore = useTabStore();
const route = useRoute();
const router = useRouter();
const onChange = function (item, index) {
  router.push(item.path);
};
const onClose = function (item, index) {
  tabStore.removeTag(index);
  console.log(tabStore.activeTab);
  
  router.push(tabStore.activeTab.path as string);
};

const options = [
  { label: "关闭全部", key: "close-all" },
  { label: "关闭左侧", key: "close-left" },
  { label: "关闭右侧", key: "close-right" },
];
const handleSelect = (key) => {};
const onRefresh = () => {
  isRefreshing.value = true;
  setTimeout(() => {
    isRefreshing.value = false;
  }, 1000);
  tabStore.refresh();
};
const isRefreshing = ref(false);

const tabRef = ref<HTMLElement>();
const scrollRef = ref<ScrollbarInst>()
const tabWrapRef = ref<HTMLElement>()
const getBounding = function(){
  const tabElement = tabRef.value as Element
  const {x:tabX,width:tabWidth} = tabElement?.getBoundingClientRect()

  const currentTabElement = tabRef.value?.children[tabStore.activeIndex] as Element
  const {x:currentTabX,width:currentTabWidth} = currentTabElement.getBoundingClientRect()

  const scrollElement = tabWrapRef.value as Element
  const {x:tabWrapX,width:tabWrapWidth} = scrollElement?.getBoundingClientRect()
  return{
    tabX,tabWidth,tabRight:tabX+tabWidth,
    currentTabX,currentTabWidth,
    tabWrapX,tabWrapWidth,tabWrapRight:tabWrapX+tabWrapWidth
  }
}
const scrollTab = function(){
    console.log(getBounding());
    const {tabX,tabWidth,tabRight,currentTabX,currentTabWidth,tabWrapX,tabWrapWidth,tabWrapRight} = getBounding()
    const scrollRight = (currentTabX+currentTabWidth*2)-tabWrapRight
    console.log('scrollX',scrollRight);
    console.log('scrollValue',scrollValue.value);
    if(scrollRight>1){
      scrollRef.value?.scrollTo({left:scrollRight+scrollValue.value })
    }
    const scrollLeft = (tabWrapX-currentTabX)+currentTabWidth
    if(scrollLeft>1){
      scrollRef.value?.scrollTo({left:scrollValue.value-scrollLeft})
    }
    console.log('scrollLeft',scrollLeft); 
}
onMounted(() => {
  watch(
    () => route.path,
    (value) => {
      scrollTab()
    },
    { immediate: true }
  );
});
const scrollValue = ref(0)
const onScroll = function(e){
  // console.log(e);
  
  scrollValue.value = e.target.scrollLeft
}
const setScroll = useDebounceFn(()=>{

},200)
</script>
<template>
  <div class="w-full h-full flex items-center">
    <div class="flex-1 min-w-0" ref="tabWrapRef">
    <n-scrollbar x-scrollable ref="scrollRef" @scroll="onScroll" >
      <div
        class="h-full p-t-3 pb-3 flex w-max gap-2 items-center"
        ref="tabRef"
      >
        <div
          class="bg-light-500 rounded-1 flex items-center justify-center transition-colors duration-300 ease-in-out gap-1 cursor-pointer px-2 hover:bg-gray-300 dark:bg-dark-200 dark:hover:bg-dark-50"
          v-for="(item, index) in tabStore.tabs"
          :key="index"
          :class="tabStore.activeIndex === index ? 'active' : ''"
          
        >
          <div
            class="h-full flex items-center justify-center gap-1 py-1"
            @click="onChange(item, index)"
          >
            <i
              class="leading-tight"
              v-if="item.meta.icon"
              :class="item.meta.icon"
            ></i>
            <span class="text-sm whitespace-nowrap">{{ item.meta.title }}</span>
          </div>
          <span
            class="bg-gray-100 dark:bg-dark-50 w-16px h-16px flex items-center justify-center rounded-full transition-colors hover:bg-light-50 dark:hover:bg-dark-500"
            v-if="!item.rootTab"
            @click="onClose(item, index)"
          >
            <i
              class="leading-none transition-transform ease-in-out hover:rotate-180"
              :class="
                item.loading
                  ? 'ri-loader-3-line animate-rotate-in'
                  : 'ri-close-line'
              "
            ></i>
          </span>
        </div>
      </div>
    </n-scrollbar>
    </div>
    <div class="h-full flex">
      <div
        class="px-3 flex items-center justify-center text-xl cursor-pointer hover:bg-gray-100"
        @click="onRefresh"
      >
        <i
          class="ri-refresh-line"
          :class="
            tabStore.refreshing || isRefreshing ? 'animate-rotate-in' : ''
          "
        ></i>
      </div>
      <n-dropdown trigger="click" :options="options" @select="handleSelect">
        <div
          class="px-3 flex items-center justify-center text-xl cursor-pointer hover:bg-gray-100"
        >
          <i class="ri-menu-line"></i>
        </div>
      </n-dropdown>
    </div>
  </div>
</template>
<style scoped lang="less"></style>
<style scoped>
.active {
  @apply bg-gray-300 dark:bg-dark-50;
}
</style>
