<template>
    <div>
      <h1>Home page</h1>
      <ul>
        <li>
          <router-link :to="{ name: 'UserPage' }">Users</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'LessonPage' }">Lesson</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  
  </script>
  
  <style scoped>
  
  </style>