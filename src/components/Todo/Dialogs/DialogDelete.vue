<template>
  <v-dialog :model-value="true" width="auto" persistent>
    <v-card>
      <v-card-title class="text-h5">
        Delete this note?
      </v-card-title>
      <v-card-text>Are you sure you want to delete the note?</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="$emit('close')" color="blue-darken-1" variant="text">
          No
        </v-btn>
        <v-btn @click="tasksStore.deleteTask(task.id)" color="red-darken-1" variant="text">
          Delete
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script setup>
import { useTasksStore } from "../../../store/TasksStore";
import { inject } from "vue";
const tasksStore = useTasksStore()

const task = inject("task")
</script>