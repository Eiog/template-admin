<script lang="ts">
export default {
  name: "Menu",
};
</script>
<script setup lang="ts">
import { ref,watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import { NMenu } from "naive-ui";
import type { MenuOption } from "naive-ui";
import { useRouteStore } from "@/store/modules/route";
const routeStore = useRouteStore()
const props = defineProps({
  collapsed:{
    type:Boolean,
    default:false
  },
  inverted:{
    type:Boolean,
    default:false
  },
  collapsedWidth:{
    type:Number,
    default:64
  },
})
const route = useRoute();
const router = useRouter();
const activeKey = ref();
watchEffect(()=>{
    activeKey.value = route.name
})
const menuOptions = routeStore.authMenu;
const menuOnChange = function (key: string, item: MenuOption): void {
  router.push({
    name: key,
  });
};
</script>
<template>
  <aside>
    <n-menu
      :options="menuOptions"
      :collapsed="collapsed"
      :collapsed-width="collapsedWidth"
      :inverted="inverted"
      :indent="20"
      v-model:value="(activeKey as string)"
      @update:value="menuOnChange"
    />
  </aside>
</template>
<style scoped lang="less"></style>
