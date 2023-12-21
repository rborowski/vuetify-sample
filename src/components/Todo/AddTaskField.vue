<template>
      <v-text-field
      class="pa-3"
      label="Add task"
      append-inner-icon="mdi-plus"
      variant="outlined"
      hide-details
      clearable
      v-model="newTaskTitle"
      @click:append-inner="handleTaskSubmit"
      @keydown.enter.exact="handleTaskSubmit"
    />
</template>

<script setup>
import { ref } from "vue";
import { useTasksStore } from "../../store/TasksStore";

const tasksStore = useTasksStore()

const newTaskTitle = ref('')

function handleTaskSubmit() {
  if (!newTaskTitle.value) return
  tasksStore.addTask(newTaskTitle.value)
  newTaskTitle.value = ""
}

</script>