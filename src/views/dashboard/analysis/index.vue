<script lang="ts">
export default {
  name: "analysis",
};
</script>
<script setup lang="ts">
import { Charts, Cards } from "./components";
const cardData = [
  {
    title: "访问量",
    unit: "",
    value: 10000,
    startColor: "#fff",
    endColor: "#ddd",
    icon: "",
  },
  {
    title: "成交额",
    unit: "",
    value: 10000,
    startColor: "#fff",
    endColor: "#ddd",
    icon: "",
  },
  {
    title: "下载量",
    unit: "",
    value: 10000,
    startColor: "#fff",
    endColor: "#ddd",
    icon: "",
  },
  {
    title: "成交数",
    unit: "",
    value: 10000,
    startColor: "#fff",
    endColor: "#ddd",
    icon: "",
  },
];
</script>
<template>
  <div class="">
    <Charts />
    <div class="flex gap-4 w-full h-140px mt-5">
      <Cards
        v-for="(item, index) in cardData"
        :key="index"
        :title="item.title"
        :unit="item.unit"
        :value="item.value"
        :start-color="item.startColor"
      ></Cards>
    </div>
  </div>
</template>
<style scoped lang="less"></style>
