<script setup lang="ts" name="BetterScroll">
import { ref, computed, watch, onMounted } from 'vue';
import { useElementSize } from '@vueuse/core';
import BScroll from '@better-scroll/core';
import type { Options } from '@better-scroll/core';
type Props = {
  options?: Options;
  scroll?: number;
  scrollX: boolean;
  scrollY?: boolean;
};
type Emit = {
  (e: 'update:scroll', data: number);
  (e: 'scroll', data: { x: number; y: number });
  (e: 'scrollStart');
  (e: 'scrollEnd');
};
const props = withDefaults(defineProps<Props>(), {
  scrollX: true,
  scrollY: false,
});
const emit = defineEmits<Emit>();
const BSOptions = ref({
  scrollX: props.scrollX,
  scrollY: props.scrollY,
  probeType: 3,
});
Object.assign(BSOptions.value, props.options);
const bsWrap = ref<HTMLElement>();
const instance = ref<BScroll>();
const bsContent = ref<HTMLElement>();
const isScrollY = computed(() => Boolean(props.scrollY));
function initBetterScroll() {
  if (!bsWrap.value) return;
  instance.value = new BScroll(bsWrap.value, BSOptions.value);
  instance.value.on('scrollStart', () => {
    emit('scrollStart');
  });
  instance.value.on('scroll', ({ x, y }) => {
    emit('scroll', { x, y });
    // emit('update:scroll',props.scrollX?-x:-y)
  });
  instance.value.on('scrollEnd', () => {
    emit('scrollEnd');
  });
}
watch(
  () => props.scroll!,
  (newValue) => {
    if (instance.value) {
      // instance.value.scrollBy(
      //   props.scrollX ? newValue : 0,
      //   props.scrollY ? newValue : 0
      // );
    }
  },
);

// 滚动元素发生变化，刷新BS
const { width: wrapWidth } = useElementSize(bsWrap);
const { width, height } = useElementSize(bsContent);
watch([() => wrapWidth.value, () => width.value, () => height.value], () => {
  if (instance.value) {
    instance.value.refresh();
  }
});
onMounted(() => {
  initBetterScroll();
});
defineExpose({ instance });
</script>
<template>
  <div ref="bsWrap" class="h-full text-left">
    <div ref="bsContent" class="inline-block" :class="{ 'h-full': !isScrollY }">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped lang="less"></style>
