<template>
  <div>
    <ul>
      <li>
        <router-link :to="{ name: 'HomePage' }">Главная</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'GaleryPage' }">Галерея</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'ContactPage' }">Контакты</router-link>
      </li>
    </ul>
    <h1>Home page</h1>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>