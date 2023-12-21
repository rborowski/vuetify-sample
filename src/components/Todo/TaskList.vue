<template>
  <v-list select-strategy="classic" class="px-0">
    <div v-for="task in tasksStore.tasks" :key="task.id">
      <task :task="task"/>
    </div>
  </v-list>
</template>

<script setup>
import { useTasksStore } from "../../store/TasksStore";
import Task from "./Task.vue";

const tasksStore = useTasksStore()
</script>