<script lang="ts">
export default {
  name: "NotFound",
};
</script>
<script setup lang="ts"></script>
<template>
  <div class="w-full h-full flex items-center justify-center">
    <div class="not-found"></div>
  </div>
</template>
<style scoped lang="less">
.not-found{
  width: 600px;
  height: 400px;
  background: url('@/assets/svg/undraw_page_not_found_re_e9o6.svg');
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
