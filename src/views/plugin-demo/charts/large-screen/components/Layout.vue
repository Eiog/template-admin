<script setup lang="ts" name="GridLayout">
import { GridLayout, GridItem } from "vue3-grid-layout";
import {useElementSize} from '@vueuse/core'
import lodash from 'lodash-es'
type LayoutOpt = {
  colNum?: number;
  rowHeight?: number;
  maxRows?: number | null;
  margin?: number[];
  isDraggable?: boolean;
  isResizable?: boolean;
  isMirrored?: boolean;
  autoSize?: boolean;
  verticalCompact?: boolean;
  useCssTransforms?: boolean;
  responsive?: boolean;
  breakpoints?: { lg: number; md: number; sm: number; xs: number; xxs: number };
  cols?: { lg: number; md: number; sm: number; xs: number; xxs: number };
  useStyleCursor?: boolean;
  preventCollision?: boolean;
};
type LayoutItem = {
  i: number|string|import('vue').Component;
  x: number;
  y: number;
  w: number;
  h: number;
  minW?: number;
  minH?: number;
  maxW?: number | string;
  maxH?: number | string;
  isDraggable?: boolean | null;
  isResizable?: boolean | null;
  static?: boolean;
  dragIgnoreFrom?: string;
  dragAllowFrom?: string | null;
  resizeIgnoreFrom?: string;
};
type Props = {
  option?: LayoutOpt;
  data?: LayoutItem[];
};
const props = defineProps<Props>();
const domRef = ref()
const { width, height } = useElementSize(domRef)
const _rowHeight = computed(()=>{
  return Math.floor(1080/1920*width.value/10)
})
const LayoutOption = ref<LayoutOpt>({
  colNum: 12,
  rowHeight: _rowHeight.value,
  maxRows: 10,
  margin: [0, 0],
  isDraggable: true,
  isResizable: true,
  isMirrored: false,
  autoSize: true,
  verticalCompact: true,
  useCssTransforms: true,
  responsive: true,
  breakpoints: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 },
  cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  useStyleCursor: true,
  preventCollision: false,
});

watch(
  () => props.option,
  (val) => {
    if (val) Object.assign(val,LayoutOption.value);
  }
);
const layoutData = ref<LayoutItem[]>(lodash.cloneDeep(props.data) as LayoutItem[])
const onLayoutCreated = (newLayout) => {
  // console.log(newLayout);
};
const onLayoutBeforeMount = (newLayout) => {
  // console.log(newLayout);
};
const onLayoutMounded = (newLayout) => {
  // console.log(newLayout);
};
const onLayoutReady = (newLayout) => {
  // console.log(newLayout);
};
const onLayoutUpdated = (newLayout) => {
  // console.log(newLayout);
};
const onLayoutChanged = (newLayout) => {
  // console.log(newLayout);
};

const onResize = (i, newX, newY) => {
  console.log("Resize i=" + i + ", X=" + newX + ", Y=" + newY);
};
const onMove = (i, newH, newW, newHPx, newWPx) => {
  // console.log(
  //   "RESIZE i=" +
  //     i +
  //     ", H=" +
  //     newH +
  //     ", W=" +
  //     newW +
  //     ", H(px)=" +
  //     newHPx +
  //     ", W(px)=" +
  //     newWPx
  // );
};
const onResized = (i, newH, newW, newHPx, newWPx) => {
  console.log("RESIZED i=" + i + ", H=" + newH + ", W=" + newW + ", H(px)=" + newHPx + ", W(px)=" + newWPx);
};
const onContainerResized = (i, newH, newW, newHPx, newWPx) => {
  // console.log(
  //   "CONTAINER RESIZED i=" +
  //     i +
  //     ", H=" +
  //     newH +
  //     ", W=" +
  //     newW +
  //     ", H(px)=" +
  //     newHPx +
  //     ", W(px)=" +
  //     newWPx
  // );
};
const onMoved = (i, newH, newW, newHPx, newWPx) => {
  // console.log(
  //   "RESIZED i=" +
  //     i +
  //     ", H=" +
  //     newH +
  //     ", W=" +
  //     newW +
  //     ", H(px)=" +
  //     newHPx +
  //     ", W(px)=" +
  //     newWPx
  // );
};
</script>
<template>
<div class="w-full h-full" ref="domRef">
  <grid-layout
    v-model:layout="layoutData"
    :col-num="LayoutOption.colNum"
    :row-height="_rowHeight"
    :max-rows="LayoutOption.maxRows"
    :margin="LayoutOption.margin"
    :is-draggable="LayoutOption.isDraggable"
    :is-resizable="LayoutOption.isResizable"
    :is-mirrored="LayoutOption.isMirrored"
    :auto-size="LayoutOption.autoSize"
    :vertical-compact="LayoutOption.verticalCompact"
    :use-css-transforms="LayoutOption.useCssTransforms"
    :responsive="LayoutOption.responsive"
    :breakpoints="LayoutOption.breakpoints"
    :cols="LayoutOption.cols"
    :use-style-cursor="LayoutOption.useStyleCursor"
    :prevent-collision="LayoutOption.preventCollision"
    @layout-created="onLayoutCreated"
    @layout-before-mount="onLayoutBeforeMount"
    @layout-mounted="onLayoutMounded"
    @layout-ready="onLayoutReady"
    @layout-updated="onLayoutUpdated"
    @breakpoint-changed="onLayoutChanged"
  >
    <grid-item
      class="bg-gray-50 border border-gray-600"
      v-for="(item, index) in layoutData"
      :x="item.x"
      :y="item.y"
      :w="item.w"
      :h="item.h"
      :i="item.i"
      :key="item.i"
      @resize="onResize"
      @move="onMove"
      @resized="onResized"
      @container-resized="onContainerResized"
      @moved="onMoved"
    >
      {{ item.i }}
    </grid-item>
  </grid-layout>
  </div>
</template>
<style scoped lang="less"></style>
