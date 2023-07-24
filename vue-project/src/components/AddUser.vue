<template>
  <div>
    <input type="text" name="name" id="name" placeholder="name" v-model="user.name" /><br />
    <input
      type="text"
      name="surname"
      id="surname"
      placeholder="surname"
      v-model="user.surname"
    /><br />
    <input
      type="text"
      name="father"
      id="father"
      placeholder="father name"
      v-model="user.father"
    /><br />
    <select v-model="user.role">
        <option value="Учитель">Учитель</option>
        <option value="Студент">Студент</option>
      </select><br>
    <input type="date" name="birth" id="birthDate" v-model="user.birthDate" /><br />
    <button @click="userAddData(user)">Сохранить</button><br />
    <button @click="cancel()">Отмена</button>
  </div>
</template>

<script setup lang="ts">
import {  ref } from 'vue'
import { useRouter } from 'vue-router';

import type { User } from '@/types/user'

const user = ref<User>({
  name: '',
  surname: '',
  father: '',
  role: '',
  birthDate: ''
})
const router = useRouter();

function userAddData(obj: object) {
  const users = JSON.parse(localStorage.getItem('UsersSave') as string)
  let newUser = Object.assign({ id: new Date().getTime() } as User, obj)
  users.push(newUser)
  localStorage.setItem('UsersSave', JSON.stringify(users))
  router.push({ name: 'UserId', params:{id: newUser.id}})
}
function cancel() {
  router.push({ name: 'UserPage' })
}
</script>

<style scoped></style>
