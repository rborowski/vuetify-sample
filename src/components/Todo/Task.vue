<template>
    <v-list-item
      :class="{ 'bg-blue-lighten-5': task.done }"
      @click="tasksStore.doneTask(task.id)"
    >

      <template v-slot:prepend>
        <v-list-item-action start>
          <v-checkbox-btn :model-value="task.done"></v-checkbox-btn>
        </v-list-item-action>
      </template>

      <v-list-item-title
        :class="{ 'text-decoration-line-through text-disabled': task.done }"
      >
      {{ task.title}}
      </v-list-item-title>

      <template v-slot:append>
        <v-btn
          @click.stop="tasksStore.deleteTask(task.id)"
          color="blue-lighten-1"
          icon="mdi-delete"
          variant="text"></v-btn
        >
      </template>
    </v-list-item>
    <v-divider></v-divider>
</template>

<script setup>
import { useTasksStore } from "../../store/TasksStore";

const tasksStore = useTasksStore()
const props = defineProps({
  task: {
    required: true,
    type: Object,
  }
})
</script>