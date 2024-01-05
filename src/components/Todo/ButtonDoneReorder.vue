<template>
<v-layout-item model-value position="bottom" class="text-end" size="88">
  <div class="ma-4">
    <v-btn
      @click="tasksStore.draggable = false"
      icon="mdi-check"
      size="large"
      color="primary"
      elevation="8"
    />
  </div>
</v-layout-item>
</template>

<script setup>
import { useTasksStore } from "../../store/TasksStore";

const tasksStore = useTasksStore()
</script>