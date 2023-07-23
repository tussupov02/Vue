<template>
    <div class="post__card">
        <h2>{{ props.title }}</h2>
        <p>{{ props.body }}</p>
    </div>
</template>

<script setup lang="ts">
interface Props{
    body:string
    title:string
}
const props = defineProps<Props>()
</script>

<style scoped>
.post__card{
    border: 1px solid black;
    border-radius: 15px;
    background-color: teal;
    padding: 15px;
    margin: 20px;
}
</style>