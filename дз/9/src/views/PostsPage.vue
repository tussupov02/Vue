<template>
  <div>
      <post-card v-for="post in posts"
       @click="openPost(post.id)"
      :key="post.id"
      :title="post.title"
      :body="post.body"></post-card>
  </div>
</template>

<script setup lang="ts">
import {ref,onMounted} from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
import axios from 'axios'
import PostCard from '@/components/PostCard.vue';
async function makeQuery(link:string) {
  let {data} = await axios.get(`${link}`)
  
  return data
}
const posts = ref([])
onMounted(async ()=>{
  posts.value = await makeQuery('https://jsonplaceholder.typicode.com/posts')    
})

function openPost(id:any){
  router.push({name: 'PostId', params:{id: id}})
}

</script>

<style scoped>

</style>