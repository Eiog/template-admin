<script lang="ts">
export default {
  name: "Editor",
};
</script>
<script setup lang="ts">
import "@wangeditor/editor/dist/css/style.css";
import { onBeforeUnmount, ref, shallowRef, onMounted } from "vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import { NCard } from "naive-ui";
const editorRef = shallowRef();
const valueHtml = ref("<p>hello</p>");
onMounted(() => {
  setTimeout(() => {
    valueHtml.value = "<p>模拟 Ajax 异步设置内容</p>";
  }, 1500);
});
const toolbarConfig = {};
const editorConfig = { placeholder: "请输入内容..." };
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});
const handleCreated = (editor) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};
const preview = ref();
const handleChange = function(editor){
    preview.value = editor.getHtml()
}
</script>
<template>
  <div class="w-full h-full">
    <n-card
      title="富文本编辑器"
      :bordered="false"
      class="rounded-16px shadow-sm"
    >
      <div class="w-full h-full">
        <Toolbar
          style="border-bottom: 1px solid #ccc"
          :editor="editorRef"
          :defaultConfig="toolbarConfig"
          mode="default"
        />
        <Editor
          style="height: 500px; overflow-y: hidden"
          v-model="valueHtml"
          :defaultConfig="editorConfig"
          mode="default"
          @onCreated="handleCreated"
          @onChange="handleChange"
        />
      </div>
    </n-card>
    <n-card title="预览" :bordered="false" class="rounded-16px shadow-sm mt-3">
      <div class="w-full h-full" v-html="preview"></div>
    </n-card>
  </div>
</template>
<style scoped lang="less"></style>
