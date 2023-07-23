<template>
    <div>
        <article-card 
        :title="article.title"
        :url="article.url"
        :thumbnail-url="article.thumbnailUrl"></article-card>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ArticleCard from '@/components/ArticleCard.vue';
interface Props {
  id: string
}
const props = defineProps<Props>()
const articles = ref([])
const article = ref({})
onMounted(async ()=>{
let response = await fetch('https://jsonplaceholder.typicode.com/photos')
articles.value = await response.json()
articles.value.forEach((item:any) => {
    if(item.id == props.id){
        article.value = item
    }
});
})
</script>

<style scoped>

</style>