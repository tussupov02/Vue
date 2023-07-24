<!-- <template>
    <div>
        <h1>task page</h1>
        <ul>
            <li>ID: {{  tasks.id}}</li>
            <li>NAME: {{  tasks.title}}</li>
            <li>BODY: {{  tasks.content}}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
interface Props{
    id:string;
}


const props = defineProps<Props>();

import {ref, onMounted} from 'vue'
import {useJsonPlaceholder} from '@/services/api/jsonPlaceholder.service';
import type {Task} from '@/types/task'
const tasks = ref<Task>({} as Task)
const jsonPlaceholderComments= useJsonPlaceholder('comments')
onMounted(async()=>{
    const newTasks = await jsonPlaceholderComments.getItem(Number(props.id))
    tasks.value={
        id: newTasks.id,
        title: newTasks.name,
        content: newTasks.body
    }
})
</script>


<style scoped>

</style> -->


<template>
    <div>
      <h1>Task page</h1>
      <table>
          <tbody>
              <tr>
                  <td>ID</td>
                  <td>{{props.id}}</td>
              </tr>
              <tr>
                  <td>Title</td>
                  <td>{{task.title}}</td>
              </tr>
          </tbody>
      </table>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref,onMounted } from 'vue'
  import type { Task } from '@/types/task'
  const tasks = ref<Task[]>([])


  interface Props {
    id: number
  }
  const props = defineProps<Props>()
  
  const task = ref<Task>({} as Task)
  
  onMounted(async () => {
    const commentQuery = await fetch('https://jsonplaceholder.typicode.com/comments/1')
    const comments = await commentQuery.json()
    comments.forEach((comment: any) => {
      tasks.value.push({
        id: comment.id,
        title: comment.name,
        content: comment.body
      })
    })
  })
  </script>
  
  <style scoped>
  </style>