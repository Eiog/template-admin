<script lang="ts">
export default {
  name: "Login",
};
</script>
<script setup lang="ts">
import { ref, shallowRef} from "vue";
import { NDivider, NButton, NIcon } from "naive-ui";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
const componentIs = shallowRef(Login);
const registerOnClick = function(){
    componentIs.value = Register
    console.log(componentIs);
}
</script>
<template>
  <div class="content w-full h-full flex items-center justify-center">
    <div
      class="w-360px h-auto bg-white rounded-2xl shadow-xl shadow-gray-200 p-6"
    >
      <div class="">
        <h1 class="text-rose-400 text-3xl inline-block">UnlitAdmin</h1>
        <span class="text-gray-600 ml-2">后台管理系统</span>
      </div>
      <div class="w-12 h-1 mt-1 bg-rose-400 rounded-sm"></div>
      <div class="mt-4">
        <component :is="componentIs"></component>
      </div>
      <div class="flex items-center justify-center gap-3">
        <div class="flex-1">
          <n-button size="medium" block @click="">手机验证码登录</n-button>
        </div>
        <div class="flex-1">
          <n-button size="medium" block @click="registerOnClick">注册</n-button>
        </div>
      </div>
      <n-divider>
        <span class="text-sm text-gray-600">其他方式登录</span>
      </n-divider>
      <div class="flex items-center justify-center gap-5">
        <n-button tertiary circle size="large">
          <template #icon>
            <n-icon>
              <i class="ri-qq-line"></i>
            </n-icon>
          </template>
        </n-button>
        <n-button tertiary circle size="large">
          <template #icon>
            <n-icon>
              <i class="ri-wechat-line"></i>
            </n-icon>
          </template>
        </n-button>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.content {
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
}
</style>
