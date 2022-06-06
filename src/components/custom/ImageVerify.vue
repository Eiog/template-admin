<script lang="ts">
export default {
  name: "ImageVerify",
};
</script>
<script setup lang="ts">
import { watch } from "vue";
import {useImageVerify} from "@/hooks";
type Props = {
    code?:string
}
type Emits = {
    (e:'update:code',code:string):void
}
const props = withDefaults(defineProps<Props>(),{
    code:''
})
const emit = defineEmits<Emits>()
const { domRef, imgCode, setImgCode, getImgCode } = useImageVerify();
watch(
  () => props.code,
  newValue => {
    setImgCode(newValue);
  }
);
watch(imgCode, newValue => {
  emit('update:code', newValue);
});
defineExpose({ getImgCode });   
</script>
<template>
<canvas ref="domRef" class="cursor-pointer" width="140" height="40" @click="getImgCode"></canvas>
</template>
<style scoped lang="less"></style>
