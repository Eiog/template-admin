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
<div class="unlit-admin-layout">
    <header class="unlit-admin-header">
        <slot name="header"></slot>
    </header>
    <div class="unlit-admin-tabs">
        <slot name="tabs"></slot>
    </div>
    <aside class="unlit-admin-aside">
        <slot name="aside"></slot>
    </aside>
    <main class="unlit-admin-main">
        <slot name="main"></slot>
        <slot></slot>
    </main>
    <footer class="unlit-admin-footer">
        <slot name="footer"></slot>
    </footer>
    
</div>
</template>
<style scoped lang='less'>
div{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.unlit-admin-layout{
    display: flex;
    flex-direction: column;
}
.unlit-admin-header{
    position: fixed;
    top: 0;
    left: 0;
    flex-shrink: 0;
    z-index: 10003;
    width: 100%;
    min-width: 1200px;
    height: 56px;
    background: rgba(0,0,0,.1);
}
.unlit-admin-tabs{
    position: fixed;
    flex-shrink: 0;
    top: 56px;
    left: 0;
    width: 100%;
    min-width: 1200px;
    padding-left: 200px;
    height: 44px;
    background: rgba(216, 216, 216, 0.1);
}
.unlit-admin-aside{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 200px;
    padding-top: 56px;
    background: rgba(0,0,0,.1);
}
.unlit-admin-main{
    position: relative;
    padding-left: 200px;
    padding-top: 100px;
}
.unlit-admin-footer{
    position: static;
    background: rgba(0,0,0,.1);
    padding-left: 200px;
}
</style>