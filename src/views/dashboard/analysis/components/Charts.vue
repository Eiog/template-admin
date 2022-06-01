<script lang="ts">
export default {
  name: "Charts",
};
</script>
<script setup lang="ts">
import { ref, computed } from "vue";
import { NGrid, NGi, NCard } from "naive-ui";
import useEcharts from "@/hooks/useECharts";
import { type ECOption } from "@/hooks/useECharts";
import CountTo from "@/components/widget/CountTo.vue";
import { useThemeStore } from "@/store";
const themeStore = useThemeStore();
const darkMode = computed(() => themeStore.darkMode);
const { domRef: lineRef } = useEcharts(
  ref<ECOption>({
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    legend: {
      data: ["下载量", "注册数"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: [
          "06:00",
          "08:00",
          "10:00",
          "12:00",
          "14:00",
          "16:00",
          "18:00",
          "20:00",
          "22:00",
          "24:00",
        ],
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        color: "#8e9dff",
        name: "下载量",
        type: "line",
        smooth: true,
        stack: "Total",
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0.25,
                color: "#8e9dff",
              },
              {
                offset: 1,
                color: "#fff",
              },
            ],
          },
        },
        emphasis: {
          focus: "series",
        },
        data: [4623, 6145, 6268, 6411, 1890, 4251, 2978, 3880, 3606, 4311],
      },
      {
        color: "#26deca",
        name: "注册数",
        type: "line",
        smooth: true,
        stack: "Total",
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0.25,
                color: "#26deca",
              },
              {
                offset: 1,
                color: "#fff",
              },
            ],
          },
        },
        emphasis: {
          focus: "series",
        },
        data: [2208, 2016, 2916, 4512, 8281, 2008, 1963, 2367, 2956, 678],
      },
    ],
  }),
  darkMode
);
const { domRef: pieRef } = useEcharts(
  ref<ECOption>({
    tooltip: {
      trigger: "item",
    },
    legend: {
      bottom: "1%",
      left: "center",
      itemStyle: {
        borderWidth: 0,
      },
    },
    series: [
      {
        color: ["#5da8ff", "#8e9dff", "#fedc69", "#26deca"],
        name: "时间安排",
        type: "pie",
        radius: ["45%", "75%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 1,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "12",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 20, name: "学习" },
          { value: 10, name: "娱乐" },
          { value: 30, name: "工作" },
          { value: 40, name: "休息" },
        ],
      },
    ],
  }),
  darkMode
);
</script>
<template>
    <n-grid :x-gap="10" :y-gap="10" :item-responsive="true">
      <n-gi span="0:24 640:24 1024:16">
        <n-card :bordered="false" class="rounded-16px shadow-sm">
          <div class="w-full h-360px flex">
            <div class="w-200px h-full flex flex-col">
              <div class="">
                <h3>数据总览</h3>
                <p>当前应用程序数据报告</p>
              </div>
              <div class="flex items-end gap-2 mt-2">
                <span>下载量</span>
                <span class="font-bold text-3xl">
                  <count-to :start-value="0" :end-value="7754" />
                </span>
              </div>
            </div>
            <div ref="lineRef" class="w-full h-full"></div>
          </div>
        </n-card>
      </n-gi>
      <n-gi span="0:24 640:24 1024:8">
        <n-card :bordered="false" class="rounded-16px shadow-sm">
          <div ref="pieRef" class="w-full h-360px"></div>
        </n-card>
      </n-gi>
    </n-grid>
</template>
<style scoped lang="less"></style>
