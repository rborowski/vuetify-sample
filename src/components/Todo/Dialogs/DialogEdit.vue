<template>
  <v-dialog :model-value="true" width="auto" persistent>
    <v-card>
      <v-card-title class="text-h5">
        Edit task
      </v-card-title>
      <v-card-text>Edit the title of this task
        <v-text-field
          v-model="newTaskTitle"
          @keydown.enter.exact="handleEditSubmit()"
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="$emit('close')" color="blue-darken-1" variant="text">
          Cancel
        </v-btn>
        <v-btn
          @click="handleEditSubmit()"
          color="red-darken-1"
          variant="text"
          :disabled="invalidTaskTitle"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { useTasksStore } from "../../../store/TasksStore";
import { ref, inject, onMounted, computed } from "vue";
const tasksStore = useTasksStore()

const emit = defineEmits(["close"])

const newTaskTitle = ref('')

const task = inject("task")

const invalidTaskTitle = computed( () => !newTaskTitle.value || newTaskTitle.value === task.title)

function handleEditSubmit() {
  if (invalidTaskTitle.value) return
  tasksStore.editTaskTitle(task.id, newTaskTitle.value)
  emit("close")
}

onMounted(() => newTaskTitle.value = task.title)
</script>