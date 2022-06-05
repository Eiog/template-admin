<script lang="ts">
export default {
  name: "Login",
};
</script>
<script setup lang="ts">
import { ref, shallowRef } from "vue";
import { NDivider, NButton, NIcon } from "naive-ui";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import Verification from "./components/Verification.vue";
const componentIs = shallowRef(Login);
const onGo = function (data) {
  componentIs.value =
    data === "verification" ? Verification : (Register as any);
};
const onBack = function () {
  componentIs.value = Login;
};
</script>
<template>
  <div
    class="content bg-transparentw-full h-full flex items-center justify-center"
  >
    <div class="fixed left-0 bottom-0 w-full h-full">
      <div class="absolute left-0 bottom-0 bg-#fff w-full h-360px">
        <svg
          class="absolute left-0 bottom-360px w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#fff"
            d="M0,192L60,192C120,192,240,192,360,202.7C480,213,600,235,720,213.3C840,192,960,128,1080,122.7C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div class="absolute right-0 top-8 w-300px">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#A7F0BA"
            d="M50.3,5.7C50.3,30.7,25.1,61.4,-3.5,61.4C-32.2,61.4,-64.4,30.7,-64.4,5.7C-64.4,-19.3,-32.2,-38.6,-3.5,-38.6C25.1,-38.6,50.3,-19.3,50.3,5.7Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div class="absolute left-0 top-8 w-300px h-full">
        <svg viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            d="
                M 0, 38.5
                C 0, 29.26 29.26, 0 38.5, 0
                S 77, 29.26 77, 38.5
                    47.739999999999995, 77 38.5, 77
                    0, 47.739999999999995 0, 38.5
            "
            fill="#FADB5F"
            transform="rotate(
                -6,
                100,
                100
            ) translate(
                61.5
                61.5
            )"
          ></path>
        </svg>
      </div>
      <div class="absolute left-100px top-500px w-300px h-full opacity-50">
        <svg viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            d="
                M 0, 27
                C 0, 11.07 11.07, 0 27, 0
                S 54, 11.07 54, 27
                    42.93, 54 27, 54
                    0, 42.93 0, 27
            "
            fill="#F9703E"
            transform="rotate(
                -29,
                100,
                100
            ) translate(
                73
                73
            )"
          ></path>
        </svg>
      </div>
      <div class="absolute right-100px top-500px w-300px h-full opacity-50">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#E8DAFF"
            d="M47.6,-52.1C59.5,-35.6,65.6,-17.8,66.6,0.9C67.5,19.7,63.2,39.3,51.3,52.6C39.3,66,19.7,73,2.2,70.8C-15.3,68.6,-30.6,57.3,-46.8,43.9C-62.9,30.6,-80,15.3,-81.5,-1.5C-83,-18.3,-68.9,-36.6,-52.7,-53.1C-36.6,-69.6,-18.3,-84.3,-0.2,-84.1C17.8,-83.8,35.6,-68.6,47.6,-52.1Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </div>
    <div
      class="w-360px h-auto z-10 bg-white rounded-2xl shadow-xl shadow-gray-200 p-6 transition-all"
    >
      <div class="">
        <h1 class="text-rose-400 text-3xl inline-block">UnlitAdmin</h1>
        <span class="text-gray-600 ml-2">后台管理系统</span>
      </div>
      <div class="w-12 h-1 mt-1 bg-rose-400 rounded-sm"></div>
      <div class="mt-4">
        <transition name="fade-transform" mode="out-in">
          <component
            :is="componentIs"
            @on-go="onGo"
            @on-back="onBack"
          ></component>
        </transition>
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

.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-transform-enter-from {
  opacity: 0;
}

.fade-transform-leave-to {
  opacity: 0;
}
</style>
