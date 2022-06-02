<script lang="ts">
export default {
  name: "analysis",
};
</script>
<script setup lang="ts">
import { Charts, MiniCards,OtherParts } from "./components";

</script>
<template>
  <div class="w-full">
    <Charts />
    <mini-cards></mini-cards>
    <other-parts></other-parts>
  </div>
</template>
<style scoped lang="less"></style>
