<template>
  <div>
    <input type="text" name="title" id="title" placeholder="title" v-model="lesson.title" /><br />
    <select v-model="lesson.choice">
      Учитель
      <option v-for="less in teacher" :key="less.id" :value="less.name">
        {{ less.name }}
      </option></select
    ><br />
    <input type="text" name="time" id="time" placeholder="08:45" v-model="lesson.date" /><br />
    <input
      type="text"
      name="content"
      id="content"
      placeholder="content"
      v-model="lesson.content"
    /><br />

    <select v-model="lesson.adding">
      Студент
      <option v-for="stud in students" :key="stud.id" :value="stud.name">
        {{ stud.name }}
      </option></select
    ><br />
    <button @click="lessAddData(lesson)">Сохранить</button><br />
    <button @click="cancel()">Отмена</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import type { Lesson } from '@/types/lesson'

const lesson = ref<Lesson>({
  title: '',
  choice: '',
  adding: '',
  date: '',
  content: '',
  homw: '',
  discription: '',
  students: []
})

const router = useRouter()

function lessAddData(obj: object) {
  let users = []
  try {
    users = JSON.parse(localStorage.getItem('LessData') as string)
  } catch {
    users = []
  }
  let newUser = Object.assign({ id: new Date().getTime() } as Lesson, obj)
  users.push(newUser)
  localStorage.setItem('LessData', JSON.stringify(users))
  router.push({ name: 'LessonId', params: { id: newUser.id } })
}
function cancel() {
  location.replace('/lessons')
}

const teacher: any = ref([])
const students: any = ref([])

onMounted(() => {
  teacher.value = JSON.parse(localStorage.getItem('UsersSave') as string).filter((element: any) => {
    return element.role === 'Учитель'
  })
  console.log(teacher.value)
  students.value = JSON.parse(localStorage.getItem('UsersSave') as string).filter(
    (element: any) => {
      return element.role === 'Студент'
    }
  )
  console.log(students.value)
})
</script>

<style scoped></style>
