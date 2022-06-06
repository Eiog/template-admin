<script lang="ts">
export default {
  name: "",
};
</script>
<script setup lang="ts">
import { ref } from "vue";
import { useRoute,useRouter } from "vue-router";
import {
  FormInst,
  NForm,
  NFormItem,
  NButton,
  NInput,
  useMessage,
} from "naive-ui";
const message = useMessage()
const router = useRouter()
const emit = defineEmits(['onBack'])
const formRef = ref<FormInst | null>(null);
const formValue = ref({
  userName: "",
  password: "",
});
const formRules = {
  userName: { required: true, message: "请输入用户名", trigger: ["blur"] },
  password: { required: true, message: "请输入密码", trigger: ["blur"] },
};
const onSubmit = function (e:MouseEvent) {
    e.preventDefault()
    formRef.value?.validate((err)=>{
        if(err){
            return message.error('请输入内容')
        }
        message.success('ok')
    })
};
</script>
<template>
  <div>
    <h1 class="text-gray-600 font-thin">注册</h1>
    <div class="mt-2">
      <n-form
        :model="formValue"
        ref="formRef"
        :rules="formRules"
        :show-label="false"
        size="large"
      >
        <n-form-item label="用户名" path="userName">
          <n-input v-model:value="formValue.userName" placeholder="用户名" />
        </n-form-item>
        <n-form-item label="密码" path="password">
          <n-input
            v-model:value="formValue.password"
            type="password"
            placeholder="密码"
          />
        </n-form-item>
        <n-form-item>
          <n-button type="primary" block @click="onSubmit">注册</n-button>
        </n-form-item>
        <n-form-item>
          <n-button block @click="emit('onBack')">返回</n-button>
        </n-form-item>
      </n-form>
    </div>
  </div>
</template>
<style scoped lang="less"></style>
