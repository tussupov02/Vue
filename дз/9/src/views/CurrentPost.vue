<template>
    <div>
        <button @click="back()">Back</button>
        <post-card :title="currentPost.title" :body="currentPost.body"></post-card>
        <comment-card v-for="comm in currentComm" :key="comm.id"
        :name="comm.name"
        :email="comm.email"
        :body="comm.body"></comment-card>
    </div>
</template>

<script setup lang="ts">
import {ref,onMounted} from 'vue'
import axios from 'axios';
import PostCard from '@/components/PostCard.vue';
import CommentCard from '@/components/CommentCard.vue';
import { useRouter } from 'vue-router'
const router = useRouter()
interface Props {
  id: string
}
const props = defineProps<Props>()
async function makeQuery(link:string) {
    let {data} = await axios.get(`${link}`)
    
    return data
}
const currentPost = ref({})
const currentComm = ref([])
let posts = []
let comments = []
onMounted(async ()=>{
    posts = await makeQuery('https://jsonplaceholder.typicode.com/posts')    
    comments = await makeQuery('https://jsonplaceholder.typicode.com/comments')
    posts.forEach((item:any) => {
        if(item.id == props.id) currentPost.value = item
    });
    currentComm.value = comments.filter((item:any)=>currentPost.value.id == item.postId)
})
function back(){
    router.push({name: 'HomePage'})
}
</script>

<style scoped>

</style>