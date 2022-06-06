<script lang="ts">
export default {
  name: "Swiper",
};
</script>
<script setup lang="ts">
import { NCard, NSpace, NButton } from "naive-ui";
import 'swiper/css';
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import type { SwiperOptions } from "swiper";
type SwiperExampleOptions = Pick<
  SwiperOptions,
  | "navigation"
  | "pagination"
  | "scrollbar"
  | "slidesPerView"
  | "slidesPerGroup"
  | "spaceBetween"
  | "direction"
  | "loop"
  | "loopFillGroupWithBlank"
>;

interface SwiperExample {
  id: number;
  label: string;
  options: Partial<SwiperExampleOptions>;
}

SwiperCore.use([Navigation, Pagination]);
const swiperExample: SwiperExample[] = [
  { id: 0, label: "Default", options: {} },
  {
    id: 1,
    label: "Navigation",
    options: {
      navigation: true,
    },
  },
  {
    id: 2,
    label: "Pagination",
    options: {
      pagination: true,
    },
  },
  {
    id: 3,
    label: "Pagination dynamic",
    options: {
      pagination: { dynamicBullets: true },
    },
  },
  {
    id: 4,
    label: "Pagination progress",
    options: {
      navigation: true,
      pagination: {
        type: "progressbar",
      },
    },
  },
  {
    id: 5,
    label: "Pagination fraction",
    options: {
      navigation: true,
      pagination: {
        type: "fraction",
      },
    },
  },
  {
    id: 6,
    label: "Slides per view",
    options: {
      pagination: {
        clickable: true,
      },
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  {
    id: 7,
    label: "Infinite loop",
    options: {
      navigation: true,
      pagination: {
        clickable: true,
      },
      loop: true,
    },
  },
];
</script>
<template>
  <div class="w-full h-full">
    <n-card title="轮播组件" :bordered="false" class="rounded-16px shadow-sm">
      <n-space :vertical="true">
        <n-button
          text
          tag="a"
          href="https://github.com/nolimits4web/swiper"
          target="_blank"
          type="info"
        >
          github链接：https://github.com/nolimits4web/swiper
        </n-button>
        <n-button
          text
          tag="a"
          href="https://swiperjs.com/vue"
          target="_blank"
          type="info"
        >
          vue3版文档地址：https://swiperjs.com/vue
        </n-button>
        <n-button
          text
          tag="a"
          href="https://swiperjs.com/demos"
          target="_blank"
          type="info"
        >
          插件demo地址：https://swiperjs.com/demos
        </n-button>
      </n-space>
      <n-space :vertical="true">
        <div v-for="item in swiperExample" :key="item.id">
          <h3 class="py-24px text-24px font-bold">{{ item.label }}</h3>
          <swiper v-bind="item.options">
            <swiper-slide v-for="i in 5" :key="i">
              <div class="flex-center h-240px border-1px border-[#999] text-18px font-bold">Slide{{ i }}</div>
            </swiper-slide>
          </swiper>
        </div>
      </n-space>
    </n-card>
  </div>
</template>
<style scoped lang="less"></style>
