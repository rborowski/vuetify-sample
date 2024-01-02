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
        <TaskMenu />
      </template>
    </v-list-item>
    <v-divider/>
</template>

<script setup>
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