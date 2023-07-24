<template>
    <div>
      <div class="nav__users">
        <button @click="addrelocate()" id="userAdd">Add User</button>
      </div>
      <lesson-card
        v-for="user in users"
        :key="user.id"
        :user-id="user.id"
        :title="user.title"
        :choice="user.choice"
        :content="user.content"
        :adding="user.adding"
        :date="user.date"
        :less-id="user.id"
        :homw="user.homw"
      ></lesson-card>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'

  import { useRouter } from 'vue-router'
  import LessonCard from '@/components/LessonCard.vue'
  
  import type { Lesson } from '@/types/lesson'

  const router = useRouter();
  
  const users = ref<Lesson[]>([])

  onMounted(() => {
      if(!localStorage.getItem('LessData')){
          localStorage.setItem('LessData', JSON.stringify([]))
      }
      try {
        users.value = JSON.parse(localStorage.getItem('LessData') as string)
      } catch {
        users.value = []
      }
  })
  function addrelocate() {
    router.push({ name: 'LessonAdd' })
  }
  </script>
  
  <style scoped>
  .nav__users {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
    padding: 20px;
  }
  </style>