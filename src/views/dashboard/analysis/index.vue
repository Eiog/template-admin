<script lang="ts">
export default {
  name: "",
};
</script>
<script setup lang="ts">
import { ref } from 'vue';
import { NGrid, NGi,NCard } from 'naive-ui';
import useEcharts  from '@/hooks/useECharts';
import {type ECOption}  from '@/hooks/useECharts';
import CountTo from '@/components/widget/CountTo.vue'
const { domRef: lineRef } = useEcharts(
  ref<ECOption>({
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['下载量', '注册数']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        color: '#8e9dff',
        name: '下载量',
        type: 'line',
        smooth: true,
        stack: 'Total',
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0.25,
                color: '#8e9dff'
              },
              {
                offset: 1,
                color: '#fff'
              }
            ]
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: [4623, 6145, 6268, 6411, 1890, 4251, 2978, 3880, 3606, 4311]
      },
      {
        color: '#26deca',
        name: '注册数',
        type: 'line',
        smooth: true,
        stack: 'Total',
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0.25,
                color: '#26deca'
              },
              {
                offset: 1,
                color: '#fff'
              }
            ]
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: [2208, 2016, 2916, 4512, 8281, 2008, 1963, 2367, 2956, 678]
      }
    ]
  }),
);
</script>
<template>
  <div
    class="w-full h-full overflow-hidden"
  >
    <n-grid :x-gap="10" :y-gap="10" :item-responsive="true">
      <n-gi span="0:24 640:24 1024:16">
        <n-card :bordered="false" class="rounded-16px shadow-sm" >
          <div class="w-full h-360px flex">
            <div class="w-200px h-full flex flex-col">
              <div class="">
                <h1>数据总览</h1>
                <p>当前应用程序数据报告</p>
              </div>
              <div class="font-bold text-3xl">
                <count-to prefix="$" :start-value="0" :end-value="7754"/>
              </div>
            </div>
          </div>
        </n-card>
      </n-gi>
      <n-gi span="0:24 640:24 1024:8">
        <n-card :bordered="false" class="rounded-16px shadow-sm" >
          <div class="w-full h-360px"></div>
        </n-card>
      </n-gi>
    </n-grid>
    
  </div>
</template>
<style scoped lang="less"></style>
