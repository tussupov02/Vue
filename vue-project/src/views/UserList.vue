<template>
    <div>
      <div class="nav__users">
        <button @click="addrelocate()" id="userAdd">Add User</button>
      </div>
      <user-card
        v-for="user in users"
        :key="user.id"
        :user-id="user.id"
        :name="user.name"
        :surname="user.surname"
        :father="user.father"
        :role="user.role"
      ></user-card>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'

  import UserCard from '@/components/UserCasrd.vue'
  const data = [
    {
      id: 1,
      name: 'Tom',
      surname: 'Hardy',
      father: 'Margo',
      role: 'Студент',
      birthDate: `12.05.1978`
    },
  ]
  const router = useRouter();

  onMounted(() => {
      if(!localStorage.getItem('UsersSave')){
          localStorage.setItem('UsersSave', JSON.stringify(data))
      }
  })
  const users = ref(JSON.parse(localStorage.getItem('UsersSave') as string))
  function addrelocate() {
    router.push({ name: 'UserAdd' })
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