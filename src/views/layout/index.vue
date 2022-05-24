<script lang='ts'>
export default{
    name:''
}
</script>
<script setup lang='ts'>
import Layout from './components/Layout.vue';
</script>
<template>
    <Layout>
        <template #header>
            header
        </template>
        <template #tabs>
            tabs
        </template>
        <template #aside>
            aside
        </template>
        <template #footer>
            footer
        </template>
        <template #main>
            main
        </template>
    </Layout>
    
</template>
<style scoped lang='less'>

</style>