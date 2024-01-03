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
        <v-list-item-subtitle v-if="task.dueDate">
          <v-icon size="small">mdi-calendar</v-icon>
          {{ format(task.dueDate, "dd.MM.yyyy") }}
        </v-list-item-subtitle>
        <TaskMenu />
      </template>
    </v-list-item>
    <v-divider/>
</template>

<script setup>
import { format } from "date-fns";
import { useTasksStore } from "../../store/TasksStore";
import TaskMenu from "./TaskMenu.vue"
import { provide } from "vue";

const tasksStore = useTasksStore()
const props = defineProps({
  task: {
    required: true,
    type: Object,
  }
})

provide("task", props.task)

</script>