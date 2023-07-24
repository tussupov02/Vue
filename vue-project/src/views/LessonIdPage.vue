<template>
  <div>
    <p>Урок: {{ currentLess.title }}</p>
    <p>Учитель: {{ currentLess.choice }}</p>
    <p>Студент: {{ currentLess.adding }}</p>
    <p>Дата: {{ currentLess.date }}</p>
    <p>Описание: {{ currentLess.content }}</p>
    <p>Домашнее задание: {{ currentLess.homw }}</p>
    <input type="text" v-model="currentLess.homw" placeholder="ДЗ" />
    <button @click="save()">SAVE</button>
    <button @click="back()">Назад</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import type { Lesson } from '@/types/lesson'


interface Props {
  id: string
}
const router = useRouter();
const props = defineProps<Props>()
const lessons = ref<Lesson[]>([]);
const currentLess = ref<Lesson>({} as Lesson)
function loadLessData() {
  lessons.value = JSON.parse(localStorage.getItem('LessData') as string)
  lessons.value.forEach((item: any) => {
    if (item.id == props.id) currentLess.value = Object.assign({}, item)
  })
}
function save() {
  lessons.value.forEach((item: any, index: number) => {
    if (item.id == props.id) {
      lessons.value[index] = currentLess.value
    }
  })
  localStorage.setItem('LessData', JSON.stringify(lessons.value))
}
onMounted(() => {
  loadLessData()
})
function back() {
  router.push({ name: 'LessonPage' })
}
</script>

<style scoped></style>
