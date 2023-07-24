<template>
  <div>
    <input type="text" name="title" id="title" placeholder="title" v-model="lesson.title" /><br />
    <select name="teacher" id="teacher" v-model="fullname">
      <option value="None">None</option></select
    ><br />
    <input type="text" name="time" id="time" placeholder="19:00" v-model="lesson.date" /><br />
    <input
      type="text"
      name="discription"
      id="discription"
      placeholder="discription"
      v-model="lesson.discription"
    /><br />
    <checkbox-student
      v-for="student in students"
      :key="student.id"
      :id="student.id"
      :adding="student.name"
      :name="student.name"
      v-model="lesson.students"
    ></checkbox-student>
    <button @click="lessonAddData(lesson)">Сохранить</button><br />
    <button @click="cancel()">Отмена</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Lesson } from '@/types/lesson'
import { useRouter } from 'vue-router'
import CheckboxStudent from '@/components/CheckboxStudent.vue'
const fullname = ref(``)
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
const teachers: any = []
const students: any = ref([])
const router = useRouter()

onMounted(() => {
  const users = JSON.parse(localStorage.getItem('UsersSave') as string)
  users.forEach((user: any) => {
    if (user.role == 'Учитель') {
      let teacher = {
        id: user.id,
        fullName: `${user.name} ${user.surname} ${user.father}`
      }
      teachers.push(teacher)
    } else if (user.role.toLowerCase() == 'студент') {
      console.log(user)

      students.value.push(user)
    }
  })
  console.log(students.value)

  let select = document.querySelector(`#teacher`)
  for (let teacher of teachers) {
    let option = document.createElement('option')
    option.setAttribute('value', teacher.fullName)
    option.innerHTML = `${teacher.fullName}`
    select?.appendChild(option)
  }
})
function lessonAddData(obj: any) {
  let lessons = JSON.parse(localStorage.getItem('LessData') as string)
  let currentName = fullname.value.split(' ')
  obj.choice = currentName[0]
  obj.adding = currentName[1]
  obj.content = currentName[2]
  localStorage.setItem('LessData', JSON.stringify(lessons))
  // router.push({ name: 'LessonId', params: { id: newLesson.id } })
}
function cancel() {
  router.push({ name: 'LessonList' })
}
</script>

<style scoped></style>
