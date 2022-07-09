<script setup lang="ts" name="draggable-demo">
import { ref } from "vue";
import VueDraggable from "vuedraggable";

const chartsList = ref([
  {
    name: "基础折线图",
    component:null,
    props:null,
    cover:'',
    width:'',
    height:''
  },
  {
    name: "基础平滑折线图",
    component:null,
    cover:'',
    width:'',
    height:''
  },
  {
    name: "基础面积图",
    component:null,
    cover:'',
    width:'',
    height:''
  },
  {
    name: "折线图堆叠",
    component:null,
    cover:'',
    width:'',
    height:''
  },
  {
    name: "堆叠面积图",
    component:null,
    cover:'',
    width:'',
    height:''
  },
]);
const previewList = ref([])
const group = ref({
    name:'charts',
    pull:true,
    put:true
})

function onStart(data) {}
function onEnd(data) {}
function onMove(e) {}
</script>
<template>
  <div class="w-full h-full">
    <n-card
      title="拖拽示例"
      :bordered="false"
      class="rounded-16px shadow-sm w-full h-full"
    >
      <div class="w-full h-760px flex border-t border-gray-300">
        <div class="w-60 h-full p-2 border-r border-gray-300 bg-gray-50">
          <vue-draggable
            class="w-full h-full flex flex-col gap-2 overscroll-y-auto"
            item-key="name"
            :list="chartsList"
            handle=".move"
            :force-fallback="true"
            :group="group"
            animation="300"
            @start="onStart"
            @end="onEnd"
            :move="onMove"
          >
            <template #item="{ element }">
              <div
                class="move w-full h-40 p-2 rounded-xl shadow shadow-gray-200 flex flex-col bg-white"
              >
                <div
                  class="w-full h-8 flex items-center justify-start cursor-move"
                >
                  {{element.name}}
                </div>
                <span class="w-full h-1px bg-gray-300"></span>
                <div class="flex-1 flex items-center justify-center">
                  {{ element }}
                </div>
              </div>
            </template>
          </vue-draggable>
        </div>
        <div class="flex-1 flex items-center justify-center bg-gray-200">
          <vue-draggable
            class="w-full h-full"
            item-key="name"
            :list="previewList"
            handle=".move"
            :force-fallback="true"
            group="charts"
            animation="300"
            @start="onStart"
            @end="onEnd"
            :move="onMove"
          >
            <template #item="{ element }">
              <div
                class="move w-full h-40 p-2 rounded-xl shadow shadow-gray-200 flex flex-col bg-white"
              >
                <div class="w-full h-8 flex items-center justify-start">
                  标题
                </div>
                <span class="w-full h-1px bg-gray-300"></span>
                <div class="flex-1 flex items-center justify-center">
                  {{ element }}
                </div>
              </div>
            </template>
          </vue-draggable>
        </div>
      </div>
    </n-card>
  </div>
</template>
<style scoped lang="less"></style>
