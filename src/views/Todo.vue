<template>
  <div class="todo">
    <add-task-field />
    <no-tasks v-if="tasksStore.tasks.length === 0 && !tasksStore.isLoading" />
    <no-tasks v-else-if="tasksStore.getTasks.length === 0 && !tasksStore.isLoading" :emptyList="false"/>
    <div v-else-if="tasksStore.isLoading" class="w-100 mt-4">
      <v-progress-circular
      class="mx-auto d-block"
      color="primary"
      indeterminate
      :size="128"
      :width="12"
      ></v-progress-circular>
    </div>
    <task-list v-else />
    <button-done-reorder v-if="tasksStore.draggable"/>
  </div>
</template>

<script setup>
import { useTasksStore } from "../store/TasksStore";
import { onMounted } from "vue";
import AddTaskField from "../components/Todo/AddTaskField.vue";
import TaskList from "../components/Todo/TaskList.vue";
import NoTasks from "../components/Todo/NoTasks.vue";
import ButtonDoneReorder from "../components/Todo/ButtonDoneReorder.vue";

const tasksStore = useTasksStore()

onMounted(() => tasksStore.loadTasks())
</script>