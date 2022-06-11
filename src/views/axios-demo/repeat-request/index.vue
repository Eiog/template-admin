<script lang="ts">
export default {
  name: "RepeatRequest",
};
</script>
<script setup lang="ts">
import { NCard,NSpace,NButton } from 'naive-ui';
import http from '@/http'
const sendRequest = function(path){
    http.get('repeat-request/'+path).then(res=>{
      console.log(res);
      
    })
}
</script>
<template>
<div class="w-full h-full">
    <n-card
      title="多次重复请求拦截"
      :bordered="false"
      class="rounded-16px shadow-sm"
    >
    <n-space>
      <n-button type="primary" size="medium" @click="sendRequest('/path1')">发送请求地址1</n-button>
      <n-button type="primary" size="medium" @click="sendRequest('/path2')">发送请求地址2</n-button>
    </n-space>
    <p class="mt-3">同一请求地址在收到响应之前多次触发会取消上一个请求</p>
    </n-card>
</div>
</template>
<style scoped lang="less"></style>
