
<template>
    <div>
        <p>ID: {{ user.Id }}</p>
        <p>Name: {{ user.Name }}</p>
        <p>Surname: {{ user.Surname }}</p>
        <p>Age: {{ user.age }}</p>
        <p>Mail: {{ user.Mail }}</p>
        <p>Country: {{ user.Country }}</p>
      
    </div>
    <div>
        <button @click="numb">Ok</button>
        <p>{{ newNumb }} {{ save }}</p>
    </div>
  </template>
  
  <script setup>
    import {ref} from 'vue'
  const user = {
	Id: 65461,
	Name: 'Baks',
	Surname: 'Tuss',
	age: 25,
	Mail: 'tuss@gmail.com',
	Country: "Malasia"
}
    const save = []
    const newNumb = ref(1)
    const numb=()=> newNumb.value=Math.floor(Math.random()*100); save.push(newNumb.value)
    

  </script>
  
  
  
  <style scoped>
  
  </style>
  