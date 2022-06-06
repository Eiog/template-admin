<script lang="ts">
export default {
  name: "Video",
};
</script>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { NCard } from "naive-ui";
import Player from "xgplayer";
const videoRef = ref();
const renderPlayer = function () {
  new Player({
    el: videoRef.value,
    url: "https://unlit.oss-cn-beijing.aliyuncs.com/150820%20%ED%94%BC%EC%97%90%EC%8A%A4%ED%83%80%28FIESTAR%29%20%EC%9E%AC%EC%9D%B4%20-%20%EC%A7%A0%ED%95%B4%20%28You%27re%20pitiful%29%20%40%EC%96%91%ED%8F%89%20%ED%95%9C%EB%A7%88%EC%9D%8C%20%EC%9C%84%EB%AC%B8%EA%B3%B5%EC%97%B0%20%EC%A7%81%EC%BA%A0%20Fancam%20by%20-wA-.mp4",
    playbackRate: [0.5, 0.75, 1, 1.5, 2],
  });
};
onMounted(()=>{
    renderPlayer()
})
</script>
<template>
  <div class="w-full h-full">
    <n-card title="视频播放器" :bordered="false" class="rounded-16px shadow-sm">
      <div ref="videoRef"></div>
    </n-card>
  </div>
</template>
<style scoped lang="less"></style>
