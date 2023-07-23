<template>
  <div class="article__card">
      <img :src="props.url" :alt="props.thumbnailUrl">
      <h3>{{ props.title }}</h3>
  </div>
</template>

<script setup lang="ts">
interface Props{
  title: string
  url: string
  thumbnailUrl: string
}
const props = defineProps<Props>()
</script>

<style scoped>
.article__card{
  border-radius: 15px;
  border: 1px solid red;
  padding: 15px;
  margin: 20px;
}
</style>