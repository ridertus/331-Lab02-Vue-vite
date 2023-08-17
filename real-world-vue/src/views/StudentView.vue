<script setup lang="ts">
import StudentCard from '../components/StudentCard.vue'
import type { studentItem } from '@/type';


import { ref } from 'vue'
import type { Ref } from 'vue'
import StudentService from '@/services/StudentService'
const students: Ref<Array<studentItem>> = ref([])
StudentService.getEvent().then((response) => {
  students.value = response.data
})
</script>


<template>
  <h1>Events For Good</h1>
  <main class="flex flex-col items-center">
    <StudentCard v-for="student in students" :key="student.id" :student="student"></StudentCard>
  </main>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>