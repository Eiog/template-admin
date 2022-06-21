<script setup lang="ts" name="TabItem">
type Props = {
  data: AuthTab.Tab;
  active: boolean;
};
type Emit = {
  (e: "onChange", data: AuthTab.Tab);
  (e: "onClose", data: AuthTab.Tab);
};
const props = defineProps<Props>();
const emit = defineEmits<Emit>();
</script>
<template>
  <div
    class="bg-light-500 rounded-md flex items-center justify-center transition-colors gap-1 cursor-pointer px-2"
    hover="bg-gray-300"
    dark="bg-dark-200 hover:bg-dark-50"
    :class="active ? 'active' : ''"
  >
    <div
      class="h-full flex items-center justify-center gap-1 py-1.5"
      @click="emit('onChange', data)"
    >
      <i class="leading-none text-lg" v-if="data.icon" :class="data.icon"></i>
      <span class="text-sm whitespace-nowrap">{{ data.title }}</span>
    </div>
    <span
      class="bg-gray-100 w-16px h-16px flex items-center justify-center rounded-full transition-colors"
      hover="bg-light-50"
      dark="bg-dark-50 hover:bg-dark-500"
      v-if="!data.rootTab"
      @click="emit('onClose', data)"
    >
      <i
        class="leading-none transition-transform ease-in-out"
        hover="rotate-180"
        :class="
          data.loading ? 'ri-loader-3-line animate-rotate-in' : 'ri-close-line'
        "
      ></i>
    </span>
  </div>
</template>
<style scoped lang="less">
.active {
  @apply bg-gray-300 dark:bg-dark-50;
}
</style>
