<script lang="ts">
export default {
  name: "Clipboard",
};
</script>
<script setup lang="ts">
import { ref } from "vue";
import { NCard, NInput, NButton, NSpace, useMessage } from "naive-ui";
import { useClipboard } from "@vueuse/core";
const { copy, isSupported } = useClipboard();
const message = useMessage();
const inputValue = ref("");

const handleClickClipboard = function () {
  if (!isSupported) return message.error("浏览器不支持");
  if (!inputValue.value) return message.error("内容空");
  copy(inputValue.value);
  message.success(`复制成功:${inputValue.value}`);
};
</script>
<template>
  <div class="w-full h-full">
    <n-card title="剪切板" :bordered="false" class="rounded-16px shadow-sm">
      <n-space>
        <n-input
          v-model:value="inputValue"
          type="text"
          placeholder=""
          size="medium"
          clearable
          @change=""
          id="clipboardId"
        ></n-input>
        <n-button type="primary" size="medium" @click="handleClickClipboard"
          >复制</n-button
        >
      </n-space>
    </n-card>
  </div>
</template>
<style scoped lang="less"></style>
