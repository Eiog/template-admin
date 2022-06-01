<script lang="ts">
export default {
  name: "",
};
</script>
<script setup lang="ts">
import { computed } from "vue";
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
  endColor: "#ddd",
  icon: "",
});
const gradientStyle = computed(
  () =>
    `linear-gradient(to bottom right, ${props.startColor}, ${props.endColor})`
);
</script>
<template>
  <div
    class="w-full h-full rounded-16px shadow-sm overflow-hidden"
    :style="{ background: gradientStyle }"
  >
    <div class="">
        <h1>{{title}}</h1>
    </div>
    <div class="">
        <div class=""></div>
        <div class=""></div>
    </div>
  </div>
</template>
<style scoped lang="less"></style>
