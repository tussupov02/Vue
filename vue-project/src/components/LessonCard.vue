<template>
  <div class="lessoncard">
    <router-link :to="{ name: 'LessonId', params: { id: props.lessId } }"
      ><h3>{{ props.title }} {{ props.choice }}</h3>
      </router-link>
    <p>{{ props.date }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  choice?: string
  date?: string
  content?: string
  adding?: string
  lessId?: number
  homw?:string
}

const props = defineProps<Props>()
interface Emits {
  (e: 'openUser', lessId: any): void
}
const emits = defineEmits<Emits>()
</script>

<style scoped>
.lessoncard {
  width: 100%;
  height: 100px;
  background-color: rgb(165, 64, 224);
  border-radius: 15px;
  color: black;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
  padding: 10px;
}
</style>
