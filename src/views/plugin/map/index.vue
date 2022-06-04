<script lang="ts">
export default {
  name: "Map",
};
</script>
<script setup lang="ts">
import { NCard,NTabs,NTabPane } from 'naive-ui';
const mapApi = {
    amap:'https://uri.amap.com/marker?position=116.473195,39.993253',
    baidu:'http://api.map.baidu.com/marker?location=40.047669,116.313082&title=我的位置&content=百度奎科大厦&output=html&src=webapp.baidu.openAPIdemo   ',
    qq:' https://apis.map.qq.com/uri/v1/search?keyword=酒店&region=北京&referer=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77'
}
</script>
<template>
<div class="w-full h-full">
    <n-card title="地图示例" :bordered="false" class="rounded-16px shadow-sm">
        <n-tabs type="line" animated>
      <n-tab-pane name="oasis" tab="高德地图">
        <div class="w-full h-640px">
            <iframe :src="mapApi.amap" frameborder="0" class="w-full h-full"></iframe>
        </div>
      </n-tab-pane>
      <n-tab-pane name="the beatles" tab="百度地图">
        <div class="w-full h-640px">
            <iframe :src="mapApi.baidu" frameborder="0" class="w-full h-full"></iframe>
        </div>
      </n-tab-pane>
      <n-tab-pane name="jay chou" tab="腾讯地图">
        <div class="w-full h-640px">
            <iframe :src="mapApi.qq" frameborder="0" class="w-full h-full"></iframe>
        </div>
      </n-tab-pane>
    </n-tabs>
    </n-card>
    
</div>
</template>
<style scoped lang="less"></style>
