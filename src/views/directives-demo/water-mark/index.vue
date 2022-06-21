<script lang="ts">
export default {
  name: "waterMark",
};
</script>
<script setup lang="ts">
import LogosNaiveui from '~icons/logos/naiveui'
</script>
<template>
  <div class="w-full h-full">
    <n-card title="水印示例" :bordered="false" class="rounded-16px shadow-sm w-full h-full">
        <div class="w-full h-600px" v-water-marke="{text:'测试水印'}"></div>
        <LogosNaiveui></LogosNaiveui>
    </n-card>
  </div>
</template>
<style scoped lang="less"></style>
