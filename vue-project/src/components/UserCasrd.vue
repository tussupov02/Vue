<template>
    <div class="usercard">
      <router-link :to="{name:'UserId', params:{id: props.userId}}"
        ><h3>{{ props.name }} {{ props.surname }} {{ props.father }}</h3></router-link
      >
      <p>{{ props.role }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  interface Props {
    name: string
    surname: string
    father: string
    role: string
    userId: number
  }
  const props = defineProps<Props>()
  interface Emits {
    (e: 'openUser', userId: any): void
  }
  const emits = defineEmits<Emits>()
  </script>
  
  <style scoped>
  .usercard {
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