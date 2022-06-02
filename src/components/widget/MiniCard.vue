<script lang="ts">
export default {
  name: "",
};
</script>
<script setup lang="ts">
import { computed } from "vue";
import CountTo from '@/components/widget/CountTo.vue'
interface props {
  title?: string;
  unit?: string;
  value?: number;
  startColor?: string;
  endColor?: string;
  icon?: string;
}
const props = withDefaults(defineProps<props>(), {
  title: "",
  unit: "",
  value: 0,
  startColor: "#fff",
  endColor: "#fff",
  icon: "",
});
const gradientStyle = computed(
  () =>
    `linear-gradient(to bottom right, ${props.startColor}, ${props.endColor})`
);
</script>
<template>
  <div
    class="w-full h-full rounded-16px shadow-sm overflow-hidden p-3 text-white flex flex-col justify-evenly"
    :style="{ background: gradientStyle }"
  >
    <div class="">
        <h1 class="text-lg">{{title}}</h1>
    </div>
    <div class="flex items-center justify-between">
        <i :class="icon" class="text-4xl"></i>
        <div class="">
          <span class="text-xl">{{unit}}</span>
          <span class="text-4xl"><count-to :start-value="0" :end-value="value" /></span>
        </div>
    </div>
  </div>
</template>
<style scoped lang="less"></style>
