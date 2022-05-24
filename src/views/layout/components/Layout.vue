<script lang='ts'>
export default{
    name:'Layout'
}
</script>
<script setup lang='ts'>
const props = defineProps({
    mode:{
        type:String,
        default:'vertical'
    },
    siderWidth:{
        type:String,
        default:'200'
    },
    fixedHeader:{
        type:Boolean,
        default:true
    },
    fixedFooter:{
        type:Boolean,
        default:true
    },
    collapse:{
        type:Boolean,
        default:false
    },
})
</script>
<template>
<div class="layout">
    <header class="header">
        <slot name="header"></slot>
    </header>
    <div class="tabs">
        <slot name="tabs"></slot>
    </div>
    <aside class="aside">
        <slot name="aside"></slot>
    </aside>
    <main class="main">
        <slot name="main"></slot>
        <slot></slot>
    </main>
    <footer class="footer">
        <slot name="footer"></slot>
    </footer>
    
</div>
</template>
<style scoped lang='less'>

</style>