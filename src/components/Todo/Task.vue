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
          @click.stop="showDialog.delete = true"
          color="blue-lighten-1"
          icon="mdi-delete"
          variant="text"></v-btn
        >
      </template>
    </v-list-item>
    <v-divider/>
    <dialog-delete
      v-if="showDialog.delete"
      @close="showDialog.delete = false"
      @deleteRequest="tasksStore.deleteTask(task.id)"
    />
</template>

<script setup>
import { ref } from "vue";
import { useTasksStore } from "../../store/TasksStore";
import DialogDelete from './Dialogs/DialogDelete.vue'

const showDialog = ref({
  delete: false
})

const tasksStore = useTasksStore()
const props = defineProps({
  task: {
    required: true,
    type: Object,
  }
})
</script>