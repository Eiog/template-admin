<script lang="ts">
export default {
  name: "",
};
</script>
<script setup lang="ts">
import { NGrid, NGi } from "naive-ui";
import { MiniCard } from "@/components";
const cardData = [
  {
    title: "访问量",
    unit: "",
    value: 10000,
    startColor: "#4481eb",
    endColor: "#04befe",
    icon: "ri-line-chart-line",
  },
  {
    title: "成交额",
    unit: "￥",
    value: 10000,
    startColor: "#a18cd1",
    endColor: "#fbc2eb",
    icon: "ri-money-cny-circle-line",
  },
  {
    title: "下载量",
    unit: "",
    value: 10000,
    startColor: "#fdcbf1",
    endColor: "#e6dee9",
    icon: "ri-download-cloud-2-line",
  },
  {
    title: "成交数",
    unit: "",
    value: 10000,
    startColor: "#84fab0",
    endColor: "#8fd3f4",
    icon: "ri-money-cny-box-line",
  },
];
</script>
<template>
  <n-grid :x-gap="10" :y-gap="10" :item-responsive="true" class="mt-3">
    <n-gi span="0:12 640:12 1024:6" v-for="(item, index) in cardData">
      <mini-card
        :key="index"
        :title="item.title"
        :unit="item.unit"
        :value="item.value"
        :start-color="item.startColor"
        :end-color="item.endColor"
        :icon="item.icon"
      ></mini-card>
    </n-gi>
  </n-grid>
</template>
<style scoped lang="less"></style>
