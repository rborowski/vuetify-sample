<template>
  <v-dialog :model-value="true" persistent width="auto">
    <v-row justify="space-around">
      <v-date-picker color="primary" v-model="datePicked">
        <template v-slot:actions>
          <v-spacer></v-spacer>
          <v-btn @click="datePicked = null" color="blue-darken-1" variant="text">
            Clear
          </v-btn>
          <v-btn @click="$emit('close')" color="blue-darken-1" variant="text">
            Cancel
          </v-btn>
          <v-btn
            @click="handleDatePick"
            color="red-darken-1"
            variant="text"
          >
            Save
          </v-btn>
        </template>
      </v-date-picker>
    </v-row>
  </v-dialog>
</template>

<script setup>
import { useTasksStore } from "../../../store/TasksStore";
import { ref, inject, onMounted } from "vue";

const tasksStore = useTasksStore()

const emit = defineEmits(["close"])
const task = inject("task")

const datePicked = ref(null)

function handleDatePick() {
  if (!datePicked.value) {
    tasksStore.editTaskDueDate(task.id, null)
  } else {
    tasksStore.editTaskDueDate(task.id, datePicked.value.toISOString())
  }
  emit("close")
}

onMounted(() => {
  if (!task.dueDate) return
  datePicked.value = new Date(task.dueDate)
})
</script>