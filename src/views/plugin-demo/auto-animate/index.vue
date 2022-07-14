<script setup lang="ts" name="AutoAnimate">
import autoAnimate,{getTransitionSizes} from "@formkit/auto-animate";
import RiCloseFill from '~icons/ri/close-fill'

const domRef1 = ref()
const createList = ()=>{
    let data:any[] = []
    for(let i=0;i<3;i++){
        data.push({
            id:i,
            name:'测试'+i
        })
    }
    return data
}
const testList = ref(createList())
const inputVal = ref()
const handleAdd = ()=>{
    if(!inputVal.value) return
    testList.value.push({
        id:testList.value.length,
        name:inputVal.value
    })
    inputVal.value = ''
}
const handleRemove = (index:number)=>{
    testList.value.splice(index,1)
}
onMounted(()=>{
    autoAnimate(domRef1.value)
})
</script>
<template>
  <div class="w-full h-full">
    <n-card title="AutoAnimate" :bordered="false" class="rounded-16px shadow-sm h-840px">
        <div class="w-full h-full flex">
            <div ref="domRef1" class="w-1/3 h-full flex flex-col gap-3 rounded-xl">
                <div class="p-2 rounded-md bg-cool-gray-200 text-white flex items-center justify-between" v-for="(item, index) in testList" :key="index">
                    <span class="text-base text-gray-700">{{item.name}}</span>
                    <i class="i-ri-close-fill text-xl inline-block cursor-pointer text-red-600"
                    @click="handleRemove(index)"
                    ></i>
                </div>
                <div class="p-2 rounded-md bg-gray-300 text-white flex items-center">
                    <n-input v-model:value="inputVal" type="text" placeholder="Add" />
                    <n-button  type="default" @click="handleAdd" >Add</n-button>
                </div>
            </div>
            <div class="flex-1"></div>
        </div>
    </n-card>
  </div>
</template>
<style scoped lang="less"></style>
