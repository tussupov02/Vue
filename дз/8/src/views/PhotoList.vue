<template>
  <div>
      <article-card v-for="article in articles" 
      @click="openArticle(article.id)"
      :key="article.id"
      :title="article.title"
      :url="article.url"
      :thumbnailUrl="article.thumbnailUrl"></article-card>
  </div>
</template>

<script setup lang="ts">
import ArticleCard from '@/components/ArticleCard.vue';
import {ref,onMounted} from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const articles = ref([])
onMounted(async()=>{
  let response = await fetch('https://jsonplaceholder.typicode.com/photos')
  articles.value = await response.json()
})
function openArticle(id:any){
  router.push({name: 'ArticlePage', params:{id: id}})
}
</script>

<style scoped>

</style>