<template>
  <div class="comment__card">
      <span>{{ props.name }} {{ props.email }}</span>
      <p>{{ props.body }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props{
  name: string
  email: string
  body: string
}
const props = defineProps<Props>()
</script>

<style scoped>
.comment__card{
  border: 1px solid greenyellow;
  border-radius: 8px;
  color: teal;
  margin: 50px;
  padding: 5px;
}
</style>