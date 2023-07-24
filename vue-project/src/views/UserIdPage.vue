<template>
    <div>
      <p>{{ currentUser.name }} {{ currentUser.surname }} {{ currentUser.father }}</p>
      <button @click="back()">Users</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import type { User } from '@/types/user'
  import { useRouter } from 'vue-router'

  interface Props {
    id: string
  }
  const props = defineProps<Props>()
  const currentUser = ref<User>({} as User)
  const router = useRouter();

  onMounted(()=>{
      const users = JSON.parse(localStorage.getItem('UsersSave') as string)
      users.forEach((item:any) => {
          if (item.id == props.id) currentUser.value = item;
      })
  })
  function back(){
    router.push({ name: 'UserPage' })
  }
  </script>
  
  <style scoped></style>